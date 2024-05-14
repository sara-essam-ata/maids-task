import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser, IUsersTable } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private _HttpClient: HttpClient) {}

  onGetAllUsers(page: number): Observable<IUsersTable> {
    return this._HttpClient.get<IUsersTable>(`users?page=${page}`, {});
  }
  onGetUserById(id: number): Observable<IUsersTable> {
    return this._HttpClient.get<IUsersTable>(`users/${id}`);
  }
}
