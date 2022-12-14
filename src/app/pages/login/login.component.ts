import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm= new FormGroup({
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required,Validators.minLength(6)]),
  });

  constructor(private _data:DataService) { }

  ngOnInit(): void {
  }

  get email(){
    return this.loginForm.get("email");
  }
  get password(){
    return this.loginForm.get("password");
  }

  handleLogin(){
    if(this.loginForm.valid){
      this._data.login(this.loginForm.value).subscribe(
        data=> console.log(data),
        e=>console.log(e),
        ()=>{}
      )
    }
  }

}
