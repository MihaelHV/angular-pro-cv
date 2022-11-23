import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder,private router:Router){}
  ngOnInit(): void {
    this.reactiveForm();
  }
  
  reactiveForm(){
    this.myForm=this.fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]],
    })}
  
  submit(){
    const username=this.myForm.value.username;
    const password=this.myForm.value.password;
    if(username == 'sasha' && password=='1234'){
      //redireccionamos 
      this.vet();
    }
    else{
      //error
      this.myForm.reset();
    }
  }
  vet(){
    this.router.navigate(['header']);
  }
}
