import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { StorageService,LOCAL_STORAGE } from 'ngx-webstorage-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../../services/users.service';
import { User } from '../../../classes/user';
import { Subscription, Observable } from 'rxjs';


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {

  formEditProfile: FormGroup;

  emailPattern: any =
  /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
  charactersPattern: any = /A-Za-z0-9\-\_]+/;

  public user: User;

  public currentUser: any;

  error: String;

  success = false;

  constructor(
    @Inject(LOCAL_STORAGE)
    private storage: StorageService,
    private fb: FormBuilder,
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.error = null;
    //debugger
    this.user = this.storage.get('user').data;
    debugger
    this.formEditProfile = this.fb.group({
      username: [this.user?.username || '', [Validators.required, Validators.minLength(4)]],
      email: [this.user?.email || '', [Validators.required, Validators.pattern(this.emailPattern)]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    },
    {
      validator: this.matchPassword('newPassword', 'confirmPassword'),
    }
    );
  }

  submit(form) {
    debugger
    const updatedUser = Object.assign({}, this.user, {
      username: form.value.username,
      email: form.value.email,
      password: form.value.newPassword
    })
    this.userService.updateUser(updatedUser).subscribe(
      () => {
        this.success = true;
      }, (error) => {
        console.log(error)
      }
    );
  }

  userNameHasError(form) {
    if (form.controls.username.touched  || form.controls.username.dirty)  {
      return form.controls.username.errors?.pattern || form.controls.username.errors?.required || form.controls.username.errors?.minlength;
    }
  }

  emailHasError(form) {
    if (form.controls.email.touched  || form.controls.email.dirty)  {
      return form.controls.email.errors?.pattern || form.controls.email?.errors?.required;
    }
  }

  passwordHasError(password) {
    if (password.touched || password.dirty) {
      return password.errors?.minlength || password.errors?.required;
    }
  }

  confirmPasswordHasError(confirmPassword) {
    if (confirmPassword.touched || confirmPassword.dirty) {
      return confirmPassword.errors?.passwordMismatch && confirmPassword.invalid;
    }
  }


  matchPassword(newPassword: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const newPassword = formGroup.controls.newPassword;
      const confirmPassword = formGroup.controls.confirmPassword;

      if (!newPassword || !confirmPassword) {
        return null;
      }

      if (confirmPassword.errors && !confirmPassword.errors.passwordMismatch) {
        return null;
      }

      if (newPassword.value !== confirmPassword.value) {
        confirmPassword.setErrors({ passwordMismatch: true });
      } else {
        confirmPassword.setErrors(null);
      }
    }
  }

}
