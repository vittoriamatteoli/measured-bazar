import { Injectable } from '@angular/core';
import { Project } from '../Types/Project';
import { HttpClient } from '@angular/common/http';
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

  deleteProject(id: number): Observable<Project> {
    return this.http.delete<Project>(`${this.apiUrl}/${id}`);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.api);
  }

  // getProject(id: number): Observable<Project> {
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.http.get<Project>(url).pipe(
  //     tap((_) => console.log(`fetched hero id=${id}`)),
  //     catchError((err, caught) => {
  //       console.log(error, `getHero id=${id}`);
  //       return caught;
  //     })
  //   );
  // }
  // editProject(
  //   id: number,s
  //   name: string,
  //   capacity: number,
  //   actual_capacity: number
  // ): Observable<Project> {
  //   return this.http.put<Project>(this.apiUrl + '/' + id, {
  //     name: name,
  //     capacity: capacity,
  //     actual_capacity: actual_capacity,
  //   });
  // }

  // editProject() {
  //   fetch(this.apiUrl + '/1', {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       name: 'Updated Project',
  //       capacity: 200,
  //       actual_capacity: 150,
  //     }),
  //   });
  // }
}
