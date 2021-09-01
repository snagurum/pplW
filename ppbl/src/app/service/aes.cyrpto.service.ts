import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class AesCyrptoService {

  private _secretKey: string ="";
  constructor() { }

  encrypt(value : string) : string{
    return this._secretKey==undefined?"":CryptoJS.AES.encrypt(value, this._secretKey).toString();
  }

  decrypt(textToDecrypt : string){
    return this._secretKey==undefined?"":CryptoJS.AES.decrypt(textToDecrypt, this._secretKey).toString(CryptoJS.enc.Utf8);
  }
  
  public set secretKey(secretKey : string) {
    this._secretKey = secretKey.trim();
  }
  
  public get secretKey() : string {
    return this._secretKey;
  }
  

}
