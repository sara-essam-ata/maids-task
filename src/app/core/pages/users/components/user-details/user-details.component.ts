import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../service/users.service';
import { IUser } from '../../model/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  userId: number=0;
  userData: any
  constructor(
    private route:ActivatedRoute,
    private _UsersService:UsersService
  ){
    this.userId = route.snapshot.params['id'];    
  }
  ngOnInit() {
    this.getUserById()
  }

  getUserById(){
    this._UsersService.onGetUserById(this.userId).subscribe({
      next:(res)=>{
        this.userData=res?.data
      }
    })
  }

}
