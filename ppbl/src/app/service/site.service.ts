import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Password } from "../models/Password";
import { PasswordsComponent } from "../passwords/passwords.component";


@Injectable()
export class SiteService{
    private PBL_SERVICE_HOST = "http://localhost";
    private URL: string = this.PBL_SERVICE_HOST+"/api/";

    webSites: Password[]=[];

    constructor(private _http: HttpClient){

    }

    getSites(): Password[]{
        this._http.get(this.URL+'sites')
        .subscribe((sites:any) => {
            console.log(sites);
            this.webSites=sites;
            return sites;
        });
        return [];
    }

    createSite(site: Password){
        this._http.post(this.URL,{
            webSite:"google.com"
            ,userName:"google"
            ,password: "googlePassword"
        }).subscribe(()=>{

        });
    
    }


}