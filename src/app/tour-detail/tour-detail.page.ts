import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tour-detail',
  templateUrl: './tour-detail.page.html',
  styleUrls: ['./tour-detail.page.scss'],
})
export class TourDetailPage implements OnInit {


  constructor(private navCtrl: NavController) { }

  mockData: any = {
    "tour":
    {
      "name": "Pastéis de Belém",
      "image": "ruas-mais-bonitas-de-lisboa-1.jpg",
      "description": "lorem impsum dolor et nominum papis supremo et aqua",
      "price": 15,
      "rating": 5,
      "location": "Lisbon",
      "details": "extras",
      "size": 5,
      "duration": 1,
    },
    "buddy":
    {
      "name": "Alex James",
      "image": "assets/avatar-finn.png",
      "description": "Hi im alex",
      "rating": 5,
      "language": "Portuguese",
    },
  }

  ngOnInit() {

  }

  goback() {
    this.navCtrl.pop();
  }


}
