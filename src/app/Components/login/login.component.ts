import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginInfo } from 'src/app/Models/iuser';
import { UserApiService } from 'src/app/Services/user-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup
  message = '';
  UserInfoLog: LoginInfo = {} as LoginInfo;
  constructor(private formbuilder: FormBuilder, private userApiService: UserApiService, private router: Router) { 
    this.loginForm = this.formbuilder.group({
      userName:['',Validators.required],
      password:['',Validators.required],
    }) 
  }

  ngOnInit(): void {
    
  }
  get userName() {
    return this.loginForm.get('userName');
  }
  get password() {
    return this.loginForm.get('password');
  }
  login(){
    
    this.UserInfoLog = this.loginForm.value;
    this.UserInfoLog.rememberMe = true
    this.UserInfoLog.returnUrl=""
    this.userApiService.loginUser(this.UserInfoLog).subscribe({next: (res) => {
      console.log(res)
      localStorage.setItem('token',res.data.toekn)
      this.router.navigate(['/'])
    },error : (err)=>{
      this.message='Wrong username or password!!'
    }})
  }  

}
