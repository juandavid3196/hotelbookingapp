import { Component } from '@angular/core';
import {hotels} from "../../../data/hotels";
import { Hotel } from 'src/app/shared/data/interfaces/Hotel.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  hotels : Hotel[] = hotels;

}
