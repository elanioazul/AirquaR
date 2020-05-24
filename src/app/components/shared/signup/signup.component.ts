import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  formSignUp: FormGroup;

  emailPattern: any =
  /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;

  showErrorMessage: boolean;

  constructor(private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit(): void {
    this.formSignUp = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  submit(form) {
    debugger
    this.auth.signup(form.value).subscribe((response) => {

    },(error) => {
      this.showErrorMessage = error.error.message[0].messages[0].message;
    });
  }

  emailHasError(form) {
    if (form.controls.email?.touched  || form.controls.email?.dirty)  {
      return form.controls.email.errors?.pattern || form.controls.email.errors?.required;
    }
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

  errorClose() {
    this.showErrorMessage = false;
  }

}
