import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pwd',
  templateUrl: './pwd.component.html'
})
export class PwdComponent  implements OnInit {
    
    public pwd : string = '';
    public salt : string = '';
    
    constructor(){
    }

    ngOnInit():void {
        console.log(`this.title`);
    }

} 
