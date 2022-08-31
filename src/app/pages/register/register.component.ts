import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm= new FormGroup({
    name:new FormControl("",[Validators.required,Validators.minLength(3)]),
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required,Validators.minLength(6)]),
    age:new FormControl("",[Validators.required,Validators.min(21),Validators.max(60)])
  });

  constructor(private _data:DataService) { }

  ngOnInit(): void {
  }

  get name(){
    return this.registerForm.get("name");
  }
  get email(){
    return this.registerForm.get("email");
  }
  get password(){
    return this.registerForm.get("password");
  }
  get age(){
    return this.registerForm.get("age");
  }

  handleRegister(){
    if(this.registerForm.valid){
      this._data.register(this.registerForm.value).subscribe(
        data => console.log(data),
        e=> console.log(e),
        ()=>{}
      )
    }
  }
}
