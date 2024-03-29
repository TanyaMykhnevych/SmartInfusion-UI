import {Injectable} from '@angular/core';

@Injectable()
export class SysConfig {
  public url;
  public port;
  public protocol = 'https';
  public fullUrl: string;


  public constructor() {
    // this.url = 'smartinfusion-api.azurewebsites.net';
     this.url = 'localhost:5000';
    this.protocol = 'http';

    if (this.port) {
      this.fullUrl = `${this.protocol}://${this.url}:${this.port}/api`;
    } else {
      this.fullUrl = `${this.protocol}://${this.url}/api`;
    }
  }
}
