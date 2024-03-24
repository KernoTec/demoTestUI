import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent {

  users:any= [];
  constructor(private userService:UserService){}

  ngOnInit(){
    this.getAllUsers()
  }
  getAllUsers(){
    this.userService.getAllUsers().subscribe(res=>{
      console.log(res)
      this.users = res
    })
  }
  deleteUser(id:any){
    console.log("id from delete method", id)
    this.userService.deleteUser(id).subscribe((res)=>{
      console.log(res);
      this.getAllUsers();
    })
  }
}
