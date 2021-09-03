import { Component, ViewChild } from '@angular/core';
import { PasswordsComponent } from './passwords/passwords.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`h1 {
    color:'red' 
  }`]
})
export class AppComponent {
  title = 'Personal Password Bit-Locker';
  isShowAllSites = false;

  onShowAllSite(isShowAllSites: any){
    this.isShowAllSites=isShowAllSites;
    console.log("app component .... isShowAllSites = ", this.isShowAllSites);
  }

} 
