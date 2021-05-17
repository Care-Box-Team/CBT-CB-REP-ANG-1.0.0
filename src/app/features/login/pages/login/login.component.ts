import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ComponentClass } from 'src/app/core/classes/component.class';
import { LoginRequestDTO } from 'src/app/core/dtos/login.dto';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent extends ComponentClass implements OnInit {
  loginFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) {
    super();
  }

  ngOnInit(): void {
    this.buildLoginFormGroup();
  }

  buildLoginFormGroup() {
    this.loginFormGroup = this.formBuilder.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  async enter() {
    this.toValidateForms();
    if (this.loginFormGroup.valid) {
      const loginRequestDTO: LoginRequestDTO = {
        email: this.loginFormGroup.get('email').value,
        password: this.loginFormGroup.get('password').value,
      };
      await this.loginService.enter(loginRequestDTO).toPromise();
    }
  }
}
