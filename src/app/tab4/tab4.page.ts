import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page implements OnInit {

  mockData: any = {
    "user":
    {
      "name": "Alex Jones",
      "image": "assets/avatar-finn.png",
      "languages": "portuguese",
      "home": "Lisbon",
      "rating": 5,
      "description": "lorem ipsum dolor et nominem lis",
      "tourCount": 145,
    },
  }

  user: any
  constructor() { }

  ngOnInit() {
    this.user = this.mockData.user;
  }

}
