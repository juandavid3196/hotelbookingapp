import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  value : string = "show";

  formContainer :  boolean = true;
  @Output() closeModal = new EventEmitter<void>();

  closeLogin() : void {
    this.value= "hide";
    setTimeout(()=> {
      this.closeModal.emit(); 
    },3000)
  }

  changeWindow(){
    this.formContainer = !this.formContainer;
  }

}
