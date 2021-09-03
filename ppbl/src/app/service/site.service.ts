import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { WebSite } from "../models/WebSite";
import { PasswordsComponent } from "../passwords/passwords.component";
import { AesCyrptoService } from "./aes.cyrpto.service";
import { Observable } from "rxjs";


@Injectable()
export class SiteService{
    // private PBL_SERVICE_HOST = "http://localhost:3000";
    private PBL_SERVICE_HOST = "";
    private URL: string = this.PBL_SERVICE_HOST+"/api/";

    constructor(private _http: HttpClient,
        private _aesCyrptoService: AesCyrptoService){
    }

    getSites(){
        return this._http.get('/api/sites');        
    }

    createSite(site: WebSite){
        return this._http.post('/api/site',site);
    }

    getAuthentication(password: string){
        return this._http.post('/api/authentication',{password: password}).subscribe(()=>{
        });
    }

     authenticate(encriptedSecretKey: string){
        return this._http.post('/api/authenticate',
             { password: encriptedSecretKey });
    }
}
