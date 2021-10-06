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
        "image": "ruas-mais-bonitas-de-lisboa-1.jpg",
        "experiencesAvailable": 45,
      },
      {
        "name": "Sintra",
        "image": "ruas-mais-bonitas-de-lisboa-1.jpg",
        "experiencesAvailable": 21,
      },
      {
        "name": "Setubal",
        "image": "ruas-mais-bonitas-de-lisboa-1.jpg",
        "experiencesAvailable": 7,
      },
      {
        "name": "Ericeira",
        "image": "ruas-mais-bonitas-de-lisboa-1.jpg",
        "experiencesAvailable": 13,
      },
    ],
    "suggestedExperiences": [
      {
        "name": "Pastéis de Belém",
        "image": "ruas-mais-bonitas-de-lisboa-1.jpg",
        "description": "lorem impsum dolor et nominum papis supremo et aqua",
        "price": 15,
        "rating": 5,
      },
      {
        "name": "Sunset Tour",
        "image": "ruas-mais-bonitas-de-lisboa-1.jpg",
        "description": "lorem impsum dolor et nominum papis supremo et aqua",
        "price": 36,
        "rating": 5,
      },
      {
        "name": "Tuk Tuk Ride",
        "image": "ruas-mais-bonitas-de-lisboa-1.jpg",
        "description": "lorem impsum dolor et nominum papis supremo et aqua",
        "price": 9,
        "rating": 3.6,
      },
      {
        "name": "Pub Crawl",
        "image": "ruas-mais-bonitas-de-lisboa-1.jpg",
        "description": "lorem impsum dolor et nominum papis supremo et aqua",
        "price": 22,
        "rating": 4.5,
      },
    ]
  }

  constructor() { }


}
