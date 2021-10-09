import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-search-buddy',
  templateUrl: './search-buddy.page.html',
  styleUrls: ['./search-buddy.page.scss'],
})
export class SearchBuddyPage implements OnInit {


  mockData: any = {
    "buddies": [
      {
        "name": "Alex Jones",
        "image": "assets/avatar-finn.png",
        "description": "hey there",
        "interests": [
          "Museums", "Party", "Outside"
        ]
      },
      {
        "name": "Alex Jones",
        "image": "assets/avatar-finn.png",
        "description": "hey there",
        "interests": [
          "Museums", "Party"
        ]
      },
      {
        "name": "Alex Jones",
        "image": "assets/avatar-finn.png",
        "description": "hey there",
        "interests": [
          "Museums", "Party", "Outside"
        ]
      },
      {
        "name": "Alex Jones",
        "image": "assets/avatar-finn.png",
        "description": "hey there",
        "interests": [
          "Party", "Outside"
        ]
      },
      {
        "name": "Alex Jones",
        "image": "assets/avatar-finn.png",
        "description": "hey there",
        "interests": [
          "Party"
        ]
      },
      {
        "name": "Alex Jones",
        "image": "assets/avatar-finn.png",
        "description": "hey there",
        "interests": [
          "Museums"
        ]
      },
    ],
  }

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goback() {
    this.navCtrl.pop();
  }


}
