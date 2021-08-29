import { splitTypescriptSuffix } from '@angular/compiler/src/aot/util';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { WebSite } from '../models/WebSite';
import { SiteService } from '../service/site.service';

@Component({
  selector: 'app-passwords',
  templateUrl: './passwords.component.html'
})
export class PasswordsComponent  implements OnInit {
    
    public webSites: WebSite[] =[] ;
    constructor(private _siteService: SiteService){
    }

    ngOnInit():void {
      this.getAllSites();
    }

    getAllSites(){
      this._siteService.getSites().subscribe((sites:any) => {
        sites.forEach((site: any) => {
          this.webSites.push({_id:site._id, webSite: site.webSite, userName: site.userName, password: site.password});
        });
      });
    }

} 
