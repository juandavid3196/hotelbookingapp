import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkfilter',
  templateUrl: './checkfilter.component.html',
  styleUrls: ['./checkfilter.component.scss']
})
export class CheckfilterComponent {
  @Input() text  !: string;
}
