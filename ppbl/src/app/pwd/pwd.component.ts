import { OnInit, ɵɵsetComponentScope } from '@angular/core';
import { Component } from '@angular/core';
import { SiteService } from '../service/site.service';
import { WebSite } from '../models/WebSite';

@Component({
  selector: 'app-pwd',
  templateUrl: './pwd.component.html'
})
export class PwdComponent  implements OnInit {
    
  public authentication : string = '';
  public webSite : string = '';
  public userName : string = '';
  public password : string = '';

    
    constructor(private _siteService: SiteService){
    }

    ngOnInit():void {
    }

    onCreateSite(site: String, userName: String, password: String){
      let webSite:WebSite = {_id:undefined, webSite: site, userName: userName, password: password};    
      this._siteService.createSite(webSite);
    }

    onAuthenticate(password: String){
      console.log("password = ", password);
    }

} 
