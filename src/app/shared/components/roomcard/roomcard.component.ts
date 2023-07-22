import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-roomcard',
  templateUrl: './roomcard.component.html',
  styleUrls: ['./roomcard.component.scss']
})
export class RoomcardComponent {

@Input() url !: string;
@Input() title !: string;
@Input() extend !: string;
@Input() people !: string;
@Input() bedStyle !: string;
@Input() conditions !: string;
@Input() price !: string;

}
