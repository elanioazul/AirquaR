import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StationsDataService } from './services/stations-data.service';
import { MapboxGLService } from './services/mapbox-gl.service';
import { MapComponent } from './components/shared/map/map.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { LoginComponent } from './components/shared/login/login.component';
import { SignupComponent } from './components/shared/signup/signup.component';
import { HomeComponent } from './components/shared/home/home.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { UserprofileComponent } from './components/collector/userprofile/userprofile.component';
import { MarkersListComponent } from './components/collector/markers-list/markers-list.component';
import { CollectorFormComponent } from './components/collector/collector-form/collector-form.component';
import { PopupComponent } from './components/shared/popup/popup.component';
import { PopupBigComponent } from './components/shared/popup-big/popup-big.component';
import { UserhomeComponent } from './components/collector/userhome/userhome.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ChartComponent } from './components/shared/chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    PageNotFoundComponent,
    UserprofileComponent,
    MarkersListComponent,
    CollectorFormComponent,
    PopupComponent,
    PopupBigComponent,
    UserhomeComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [StationsDataService, MapboxGLService],
  bootstrap: [AppComponent],
  entryComponents: [PopupComponent, PopupBigComponent]
})
export class AppModule { }
