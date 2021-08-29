import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { WebSite } from "../models/WebSite";
import { PasswordsComponent } from "../passwords/passwords.component";


@Injectable()
export class SiteService{
    private PBL_SERVICE_HOST = "http://localhost:3000";
    private URL: string = this.PBL_SERVICE_HOST+"/api/";

    constructor(private _http: HttpClient){

    }

    getSites(){
        return this._http.get('/api/sites');
        
    }

    createSite(site: WebSite){
        this._http.post('/api/site',site).subscribe(()=>{
            console.log("result = " );
        });
    }


}