import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DataService } from '../services/data.service';
import { Project } from '../Types/Project';
import { RouterLink, RouterModule } from '@angular/router';
import { User } from '../Types/User';
import { ProjectFormComponent } from './project-form/project-form/project-form.component';
import { NgClass } from '@angular/common';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterLink,
    ProjectFormComponent,
    RouterModule,
    NgClass,
    UsersComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  @ViewChild(ProjectFormComponent) projectForm!: ProjectFormComponent;
  projects: Project[] = [];
  users: User[] = [];
  currentUser!: User;

  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.getProjects();
    this.getUsers();
  }

  getProjects(): void {
    const storedProjects = localStorage.getItem('projects');
    if (storedProjects) {
      this.projects = JSON.parse(storedProjects);
    } else {
      this.dataService.getProjects().subscribe((projects: Project[]) => {
        this.projects = projects;
      });
    }
  }
  getUsers() {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    } else {
      this.dataService.getUsers().subscribe((users: User[]) => {
        this.users = users;
        localStorage.setItem('users', JSON.stringify(users));
      });
    }
  }

  onDragStart(event: DragEvent, user: User, project: Project | undefined) {
    event.dataTransfer?.setData('userId', user.id.toString());
    this.currentUser = user;
    if (project && project.actual_capacity > 0) {
      project.actual_capacity -= 1;
      this.updateProjectsInStorage();
    }
  }

  onDrop(event: DragEvent, project: Project) {
    event.preventDefault();
    const userId = event.dataTransfer?.getData('userId');
    const user = this.users.find((u) => u.id === this.currentUser.id);
    if (user && project.actual_capacity < project.capacity) {
      user.status = project.name;
      project.actual_capacity += 1;
      this.updateProjectsInStorage();
      this.updateUsersInStorage();
    }
  }

  onDragOver(event: DragEvent) {
    console.log('drag over');
    event.preventDefault();
  }

  clearField(): void {
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    if (users && Array.isArray(users)) {
      users.forEach((user: User) => {
        user.status = 'start-line';
      });

      localStorage.setItem('users', JSON.stringify(users));
      this.users = users;
    }
    this.projects.forEach((project) => {
      project.actual_capacity = 0;
    });
    this.updateProjectsInStorage();
  }
  updateUsersInStorage(): void {
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  updateProjectsInStorage(): void {
    localStorage.setItem('projects', JSON.stringify(this.projects));
  }

  openProjectForm() {
    if (this.projectForm) {
      this.projectForm.openModal();
    }
  }

  addProject(projectData: { name: string; capacity: number }) {
    const newProject: Project = {
      id: this.projects.length + 1,
      name: projectData.name,
      capacity: projectData.capacity,
      actual_capacity: 0,
    };
    this.projects.push(newProject);
    this.updateProjectsInStorage();
    this.dataService.addProject(newProject).subscribe();
  }

  deleteProject(project: Project) {
    this.projects = this.projects.filter((p) => p.id !== project.id);
    this.updateProjectsInStorage();
    this.dataService.deleteProject(project).subscribe();
    console.log('project deleted', project.id);
  }
}
