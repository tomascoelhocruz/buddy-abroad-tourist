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
      },
      {
        "message": "Tour approved",
        "redirect": "placeholder",
      },
      {
        "message": "Tour approved",
        "redirect": "placeholder",
      },
    ],
  }

  type: string;

  constructor() { }

  ngOnInit() {
    this.type = 'conversations';
  }


}
