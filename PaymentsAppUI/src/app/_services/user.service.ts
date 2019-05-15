import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from "../../environments/environment";
import { User } from '../_models/user.model';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(`${environment.api}/users`);
  }

  getById(id: number) {
    return this.http.get(`${environment.api}/users/` + id);
  }

  register(user: User) {
    return this.http.post(`${environment.api}/users/register`, user);
  }

  update(user: User) {
    return this.http.put(`${environment.api}/users/` + user.id, user);
  }

  delete(id: number) {
    return this.http.delete(`${environment.api}/users/` + id);
  }
}
