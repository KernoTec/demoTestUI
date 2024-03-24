import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router  } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
  validateForm!: FormGroup; 
  id: any = this.activateRoute.snapshot.params['id'] //get the id

  constructor(private userService:UserService,
    private fb: FormBuilder,
    private activateRoute: ActivatedRoute,
    private router: Router
    ){  
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
    this.getUserById();
  }

  getUserById(){
    this.userService.getUserById(this.id).subscribe((res)=>{
      console.log(res);
      this.validateForm.patchValue(res);
    })
  }

  updateUser(){
    console.log(this.validateForm.value)
    this.userService.updateUser(this.id,this.validateForm.value).subscribe(res=>{
      console.log(res)
      this.router.navigate(['/']);
    })
  }
}
