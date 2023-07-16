import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Output() closeModal = new EventEmitter<void>();


  closeLogin() : void {
    this.closeModal.emit(); 
  }
}
