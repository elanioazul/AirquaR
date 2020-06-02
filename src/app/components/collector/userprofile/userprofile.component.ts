import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { StorageService,LOCAL_STORAGE } from 'ngx-webstorage-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../../services/users.service';
import { User } from '../../../classes/user';
import { Subscription, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


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

  private subscriptions: Subscription[] = [];

  constructor(
    @Inject(LOCAL_STORAGE)
    private storage: StorageService,
    private fb: FormBuilder,
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.currentUser = this.storage.get('userId')
    this.error = null;
    this.formEditProfile = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    },
    {
      validator: this.matchPassword('newPassword', 'confirmPassword'),
    }
    );
    this.userService.getLoggedUser(this.currentUser).subscribe((res) => {
      this.user = Object.assign({}, {
        id: res.id,
        username: res.username,
        email: res.email
      });
    })
    this.formEditProfile.setValue({
      email: this.user.email || '',
      username: this.user.username || ''
    });
  }

  submit(form) {
    this.subscriptions.push(this.userService.changePassword(this.user, form.value.newPassword).subscribe(
      () => {
        this.success = true;
      }, (error) => {
        console.log(error)
      }
    ));
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
