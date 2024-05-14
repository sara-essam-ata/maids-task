import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { IUser, IUsersTable } from '../../model/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  usersTable: IUsersTable | undefined;
  usersList: IUser[] | undefined;
  searchedUser: any;
  searchValue: any = '';
  page: number = 1;
  pageIndex: number = 0;

  constructor(private _UsersService: UsersService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this._UsersService.onGetAllUsers(this.page).subscribe({
      next: (res) => {
        this.usersTable = res;
        this.usersList = this.usersTable?.data;
      },
    });
  }

  searchUser() {
    this._UsersService.onGetUserById(this.searchValue).subscribe({
      next: (res) => {
        this.searchedUser = res?.data;
        // console.log(this.searchedUser);
        // console.log(this.searchValue);
        // console.log(this.usersList);
        
        
      },
    });
  }

  //pagination event
  handlePageEvent(e: any) {
    this.page = e.pageIndex + 1;
    this.getAllUsers();
  }
}
