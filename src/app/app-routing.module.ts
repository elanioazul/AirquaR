import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/shared/login/login.component';
import { SignupComponent } from './components/shared/signup/signup.component';
import { HomeComponent } from './components/shared/home/home.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { UserprofileComponent } from './components/collector/userprofile/userprofile.component';
import { MarkersListComponent } from './components/collector/markers-list/markers-list.component';
import { UserhomeComponent } from './components/collector/userhome/userhome.component'

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'usersettings', component: UserprofileComponent },
  { path: 'usermarkers', component: MarkersListComponent},
  { path: 'userhome', component: UserhomeComponent},
  {
    path: 'home', component: HomeComponent
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
