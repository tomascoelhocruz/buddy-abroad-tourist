import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  mockData: any = {
    "nearbyLocations": [
      {
        "name": "Lisboa",
        "image": "placeholder",
        "experiencesAvailable": 45,
      },
      {
        "name": "Sintra",
        "image": "placeholder",
        "experiencesAvailable": 21,
      },
      {
        "name": "Setubal",
        "image": "placeholder",
        "experiencesAvailable": 7,
      },
      {
        "name": "Ericeira",
        "image": "placeholder",
        "experiencesAvailable": 13,
      },
    ],
    "suggestedExperiences": [
      {
        "name": "Pastéis de Belém",
        "image": "placeholder",
        "price": 15,
        "rating": 5,
      },
      {
        "name": "Sunset Tour",
        "image": "placeholder",
        "price": 36,
        "rating": 5,
      },
      {
        "name": "Tuk Tuk Ride",
        "image": "placeholder",
        "price": 9,
        "rating": 3.6,
      },
      {
        "name": "Pub Crawl",
        "image": "placeholder",
        "price": 22,
        "rating": 4.5,
      },
    ]
  }

  constructor() { }


}
