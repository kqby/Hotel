import { Component } from '@angular/core';
import {HotelObject} from "../shared/adatok";

@Component({
  selector: 'app-hotelmenu',
  templateUrl: './hotelmenu.component.html',
  styleUrls: ['./hotelmenu.component.scss']
})
export class HotelmenuComponent {

  hotelObject = HotelObject;
 // name: string | undefined;
  constructor() {
  }

}
