import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { RouterModule } from '@angular/router';
import { get } from 'http';
import { User } from '../Types/User';
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.dataService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  editUser(user: User) {}
}
