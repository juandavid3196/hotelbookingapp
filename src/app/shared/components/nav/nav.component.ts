import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  openLoginMenu : boolean = false;

  openLogin() : void {
    this.openLoginMenu = true;
  }

  onCloseModal(): void {
    this.openLoginMenu = false;
  }
}
