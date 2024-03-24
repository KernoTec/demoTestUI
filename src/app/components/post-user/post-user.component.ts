import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-post-user',
  templateUrl: './post-user.component.html',
  styleUrls: ['./post-user.component.css']
})
export class PostUserComponent {

  validateForm!: FormGroup; 
  id: any = this.activateRoute.snapshot.params['id'] //get the id

  constructor(private userService:UserService,
    private activateRoute: ActivatedRoute,

    private fb: FormBuilder,
    private router: Router){  
  }

  ngOnInit(){
    this.validateForm = this.fb.group({
      nombre: [null, [Validators.required]],
      paterno: [null, [Validators.required]],
      materno: [null, [Validators.required]],
      tipoDocumento: [null, [Validators.required]],
      numeroDocumento: [null, [Validators.required]],
      fechaNacimiento: [null, [Validators.required]],
      genero: [null, [Validators.required]]
    })
  }
  postUser(){
    console.log(this.validateForm.value)
    this.userService.postUser(this.validateForm.value).subscribe(res=>{
      console.log(res)
      this.router.navigate(['/']);
    })
  }
}
