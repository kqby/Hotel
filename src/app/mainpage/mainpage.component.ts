import { Component } from '@angular/core';
import {HotelObject} from "../shared/adatok";


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent {
  hotelObject = HotelObject;

}
