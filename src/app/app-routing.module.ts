import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HotelmenuComponent} from "./hotelmenu/hotelmenu.component";
import {MainpageComponent} from "./mainpage/mainpage.component";
import {AboutusComponent} from "./aboutus/aboutus.component";
import {SingupComponent} from "./singup/singup.component";
import {HotelComponent} from "./hotel/hotel.component";

const routes: Routes = [{path:'singup',component:SingupComponent},
  { path:'hotelmenu',component:HotelmenuComponent},
  { path:'mainpage',component:MainpageComponent},
  { path:'aboutus',component:AboutusComponent},
  { path:'login',component:LoginComponent},
  {path:'{{route.path}}',component:HotelComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
