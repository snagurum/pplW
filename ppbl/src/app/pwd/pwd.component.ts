import { OnInit, ɵɵsetComponentScope } from '@angular/core';
import { Component } from '@angular/core';
import { SiteService } from '../service/site.service';
import { WebSite } from '../models/WebSite';
import { AesCyrptoService } from '../service/aes.cyrpto.service';

@Component({
  selector: 'app-pwd',
  templateUrl: './pwd.component.html'
})
export class PwdComponent  implements OnInit {
    
  public authentication : string = '';
  public webSite : string = '';
  public userName : string = '';
  public password : string = '';


    
    constructor(private _siteService: SiteService,
     private _aesCyrptoService: AesCyrptoService){
    }

    ngOnInit():void {
    }

    onCreateSite(site: String, userName: String, password: String){
      let webSite:WebSite = {_id:undefined, webSite: site, userName: userName, password: password};    
      this._siteService.createSite(webSite);
    }

    onAuthenticate(authentication: string){
      console.log("authentication = ", authentication);
      this._aesCyrptoService.secretKey=authentication;
      console.log("encrypt(google) = ", this._aesCyrptoService.encrypt("google"));
      console.log("decrypt(google) = ", this._aesCyrptoService.decrypt(this._aesCyrptoService.encrypt("google")));
    }
  }

 
