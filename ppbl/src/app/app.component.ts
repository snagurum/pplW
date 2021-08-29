import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1>{{title}}  </h1><app-pwd></app-pwd><app-passwords></app-passwords>',
  styles: [`h1 {
    color:'red' 
  }`]
})
export class AppComponent {
  title = 'Personal Password Bit-Locker';

} 
