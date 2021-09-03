import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { WebSite } from '../models/WebSite';

@Injectable({
  providedIn: 'root'
})
export class AesCyrptoService {

  private _secretKeyMD5!: CryptoJS.lib.WordArray;
  private _iv  = CryptoJS.enc.Utf8.parse("                ");

  constructor() { }

  encrypt(value : string) : string{
    return this._secretKeyMD5==undefined?"":CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value.toString()), this._secretKeyMD5,{iv: this._iv}).toString();
  }

  decrypt(textToDecrypt : string){
    return this._secretKeyMD5==undefined?"":CryptoJS.AES.decrypt(textToDecrypt, this._secretKeyMD5,{iv: this._iv}).toString(CryptoJS.enc.Utf8);
  }
  
  public encryptedSecretKey(secretKey: string): string{
    this._secretKeyMD5 =    CryptoJS.MD5(secretKey);
    const encriptedSecretKeyMD5 = this.encrypt(this._secretKeyMD5.toString());
    console.log('encriptedSecretKeyMD5 = ',encriptedSecretKeyMD5,", this._secretKeyMD5 = ", this._secretKeyMD5.toString());
    return encriptedSecretKeyMD5;
  }

  public encryptWebsite(webSite: WebSite): WebSite{
    webSite.userName = this.encrypt(webSite.userName);
    webSite.password = this.encrypt(webSite.password);
    return webSite;
  }

}
