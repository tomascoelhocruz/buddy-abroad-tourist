import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-buddy-profile',
  templateUrl: './buddy-profile.page.html',
  styleUrls: ['./buddy-profile.page.scss'],
})
export class BuddyProfilePage implements OnInit {

  mockData: any = {
    "buddy":
    {
      "name": "Alex Jones",
      "image": "assets/avatar-finn.png",
      "description": "hey there im alex lorem impsum dolor et",
      "interests": [
        "Museums", "Party", "Outside"
      ],
      "rating": 5,
      "tourCount": 145,
      "languages": "portuguese",
    },
    "tours": [
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

  experiencesGrid: any

  // helper function to change simple array to x dimensional array
  arrayToMatrix = (array, columns) => Array(Math.ceil(array.length / columns)).fill('').reduce((acc, cur, index) => {
    return [...acc, [...array].splice(index * columns, columns)]
  }, [])



  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.experiencesGrid = this.arrayToMatrix(this.mockData.tours, 2)
  }

  
  goback() {
    this.navCtrl.pop();
  }

}
