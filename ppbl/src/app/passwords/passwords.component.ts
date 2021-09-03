import { Component, OnInit, Input } from '@angular/core';
import { WebSite } from '../models/WebSite';
import { SiteService } from '../service/site.service';

@Component({
  selector: 'app-passwords',
  templateUrl: './passwords.component.html'
})
export class PasswordsComponent  implements OnInit {
    
    public webSites: WebSite[] =[] ;
    public _showAllSites = false;

    @Input() public set showAllSites(value: boolean) {
      this._showAllSites = value;
      this.getAllSites();
    }

    constructor(private _siteService: SiteService){
    }

    ngOnInit(): void {

    }

    getAllSites(){
      this._siteService.getSites().subscribe((sites:any) => {
        this.webSites=[];
        sites.forEach((site: any) => {
          this.webSites.push({_id:site._id, webSite: site.webSite, userName: site.userName, password: site.password});
        });
      });
    }

} 
