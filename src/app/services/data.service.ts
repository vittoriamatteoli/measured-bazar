import { Injectable } from '@angular/core';
import { Project } from '../Types/Project';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { User } from '../Types/User';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://6612c3e453b0d5d80f665515.mockapi.io/tasks/projects';
  private api = 'https://6612c3e453b0d5d80f665515.mockapi.io/tasks/users';
  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl).pipe(
      tap((projects: Project[]) => {
        localStorage.setItem('projects', JSON.stringify(projects));
      })
    );
  }

  addProject(project: Project): Observable<Project> {
    const newProject = project;
    return this.http.post<Project>(this.apiUrl, newProject);
  }

  //create an editProject method here

  deleteProject(project: Project): Observable<Project> {
    console.log('project', project);
    return this.http.delete<Project>(`${this.apiUrl}/${project.id}`);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.api);
  }
  // create an addUser method here
  // create an editUser method here
  //create a deleteUser method here
}
