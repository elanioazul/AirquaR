import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  showErrorMessage: boolean;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  userNameHasError(form) {
    if (form.controls.username.touched || form.controls.username.dirty) {
      return form.controls.username.errors?.required || form.controls.username.errors?.minlength;
    }
  }

  passwordHasError(form) {
    if (form.controls.password.touched ||  form.controls.password.dirty)  {
      return form.controls.password.errors?.minlength || form.controls.password.errors?.required;
    }
  }

  submit(form) {
    this.auth.login(form).subscribe(
      (res) => {
        this.router.navigate(['/home'])
      }, (error) => {
        this.showErrorMessage = error.error
      }
    )
  }


  errorClose() {
    this.showErrorMessage= false;
  }

}
