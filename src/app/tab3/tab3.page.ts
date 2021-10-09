import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  mockData: any = {
    "messages": [
      {
        "name": "Alex Jones",
        "image": "assets/avatar-finn.png",
        "description": "hey there",
      },
      {
        "name": "Alex Jones",
        "image": "assets/avatar-finn.png",
        "description": "hey there",
      },
      {
        "name": "Alex Jones",
        "image": "assets/avatar-finn.png",
        "description": "hey there",
      },
      {
        "name": "Alex Jones",
        "image": "assets/avatar-finn.png",
        "description": "hey there",
      },
      {
        "name": "Alex Jones",
        "image": "assets/avatar-finn.png",
        "description": "hey there",
      },
      {
        "name": "Alex Jones",
        "image": "assets/avatar-finn.png",
        "description": "hey there",
      },
    ],
    "notifications": [
      {
        "message": "Message recieved",
        "redirect": "placeholder",
        "time" : 3,
      },
      {
        "message": "Tour approved",
        "redirect": "placeholder",
        "time" : 5,
      },
      {
        "message": "Tour approved",
        "redirect": "placeholder",
        "time" : 14,
      },
    ],
  }

  type: string;

  constructor() { }

  ngOnInit() {
    this.type = 'conversations';
  }


}
