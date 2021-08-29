import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Password } from '../models/Password';
import { SiteService } from '../service/site.service';

@Component({
  selector: 'app-passwords',
  templateUrl: './passwords.component.html'
})
export class PasswordsComponent  implements OnInit {
    
    public pwds: Password[] =[] ;
    
    constructor(private _siteService: SiteService){
      this.pwds = this._siteService.getSites();
    }

    ngOnInit():void {
        console.log(`this.title`);
        this.pwds.push({site:'google.com', userName:'google', password: 'google'});
        this.pwds.push({site:'rediffmail.com', userName:'rediffmail', password: 'rediffmail'});
        this.pwds = this._siteService.getSites();
    }

} 
