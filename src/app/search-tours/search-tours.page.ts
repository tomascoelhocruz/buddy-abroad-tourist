import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-search-tours',
  templateUrl: './search-tours.page.html',
  styleUrls: ['./search-tours.page.scss'],
})
export class SearchToursPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goback() {
    this.navCtrl.pop();
  }

}