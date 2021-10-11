import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  // ---------- MOCK DATA ----------
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
      {
        "name": "Live music",
        "image": "ruas-mais-bonitas-de-lisboa-1.jpg",
        "description": "lorem impsum dolor et nominum papis supremo et aqua",
        "price": 5,
        "rating": 3.5,
      },
      {
        "name": "Food tour",
        "image": "ruas-mais-bonitas-de-lisboa-1.jpg",
        "description": "lorem impsum dolor et nominum papis supremo et aqua",
        "price": 40,
        "rating": 5,
      },
    ]
  }
  // ++++++++++++ MOCK DATA ++++++++++++

  menuGrid = [
    {
      "name": "Find Tour",
      "image": "assets/iconcamera.svg",
      "link": "search-tours",
    },
    {
      "name": "Tailor Tour",
      "image": "assets/iconbulb.svg",
      "link": "custom-tour",
    },
    {
      "name": "Meet Buddy",
      "image": "assets/iconfriends.svg",
      "link": "search-buddy",
    },
    {
      "name": "Get Tour Book",
      "image": "assets/icontaylor.svg",
      "link": "search-book",
    },
  ]

  experiencesGrid: any

  // helper function to change simple array to x dimensional array
  arrayToMatrix = (array, columns) => Array(Math.ceil(array.length / columns)).fill('').reduce((acc, cur, index) => {
    return [...acc, [...array].splice(index * columns, columns)]
  }, [])



  constructor() { }

  ngOnInit() {
    this.experiencesGrid = this.arrayToMatrix(this.mockData.suggestedExperiences, 2)
    this.menuGrid = this.arrayToMatrix(this.menuGrid, 2)
  }

}
