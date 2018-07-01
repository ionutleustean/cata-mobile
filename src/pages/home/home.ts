import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  ip: string = "192.168.100.29";

  constructor(public navCtrl: NavController, private httpClient: HttpClient) {

  }

  onClick(param) {
    console.log("test ", `http://${this.ip}/control?param=${param}`)

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');

    this.httpClient.get(`http://${this.ip}/control?param=${param}`, {headers: headers}).subscribe();
  }

}
