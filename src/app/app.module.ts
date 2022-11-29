import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { MatNativeDateModule } from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MatIconModule} from "@angular/material/icon";
import { LoginComponent } from './login/login.component';
import { HotelmenuComponent } from './hotelmenu/hotelmenu.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HotelComponent } from './hotel/hotel.component';
import { SingupComponent } from './singup/singup.component';
import { ImagegalleryComponent } from './imagegallery/imagegallery.component';
import { DemoDirective } from './demo.directive';
import { DatepickerComponent } from './datepicker/datepicker.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HotelmenuComponent,
    MainpageComponent,
    AboutusComponent,
    HotelComponent,
    SingupComponent,
    ImagegalleryComponent,
    DemoDirective,
    DatepickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
