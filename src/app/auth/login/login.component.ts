import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = "user@example.com";
  password = "123456";
  stateLogin:boolean = false;
  private snackBar = inject(MatSnackBar);
  private fb = inject(FormBuilder);
  private router = inject(Router)

  public formLogin:FormGroup = this.fb.group({
    username:['user@example.com', Validators.required],
    password:['123456', Validators.required]
  })

  login(){
    let {username, password} = this.formLogin.value;
    this.stateLogin = true;
    setTimeout(()=>{
      if(username.trim() == this.username && password.trim() == this.password){
        this.router.navigate(['/dashboard'])
      }else if(username.trim() =="" || password.trim() ==""){
        this.stateLogin=false;
        this.showSnackbar(`Campos vacios`)
      }else{
        this.stateLogin=false;
        this.showSnackbar(`Campos incorrectos`)
      }
    },1500);
  }


  showSnackbar(message:string){
    this.snackBar.open(message, 'done',{
      duration: 2500
    })
  }

}
