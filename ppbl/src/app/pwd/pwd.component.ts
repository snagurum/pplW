import { OnInit, Output,EventEmitter } from '@angular/core';
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
  public showCreateWebSite = false;
  @Output() showAllSites: EventEmitter<boolean> =new EventEmitter();
    
    constructor(private _siteService: SiteService,
      private _aesCyrptoService: AesCyrptoService){
    }

    ngOnInit():void {
    }

    onCreateSite(site: string, userName: string, password: string){
      let webSite:WebSite = {
        _id: undefined, webSite: site
        , userName: this._aesCyrptoService.encrypt(userName)
        , password: this._aesCyrptoService.encrypt(password)
      };    
      this._siteService.createSite(webSite)
        .subscribe(arg => {console.log("arg = ", arg)});
      
    }

    onAuthenticate(authenticationKey: string){
      const encriptedSecretKey = this._aesCyrptoService.encryptedSecretKey(authenticationKey);
      this._siteService.authenticate(encriptedSecretKey)
      .subscribe( (e) => {
        if ( e === 'Login OK') {
          this.showCreateWebSite = true;
          this.showAllSites.emit(true);
        }
      });
    }
  }

 
