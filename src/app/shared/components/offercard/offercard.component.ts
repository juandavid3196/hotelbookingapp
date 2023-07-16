import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-offercard',
  templateUrl: './offercard.component.html',
  styleUrls: ['./offercard.component.scss']
})
export class OffercardComponent {

  @Input() score !: string ;
  @Input() url !: string ;
  @Input() hotelName !: string ;
  @Input() location !: string ;
  @Input() price !: string ;
}
