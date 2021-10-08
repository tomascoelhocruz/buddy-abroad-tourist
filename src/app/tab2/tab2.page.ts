import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  mockData: any = {
    "tours": [
      {
        "name": "Pastéis de Belém",
        "image": "ruas-mais-bonitas-de-lisboa-1.jpg",
        "description": "lorem impsum dolor et nominum papis supremo et aqua",
        "date": "10/03/2022",
        "time": "15:30",
        "status": "Complete"
      },
      {
        "name": "Sunset Tour",
        "image": "ruas-mais-bonitas-de-lisboa-1.jpg",
        "description": "lorem impsum dolor et nominum papis supremo et aqua",
        "date": "10/03/2022",
        "time": "15:30",
        "status": "Complete"
      },
      {
        "name": "Tuk Tuk Ride",
        "image": "ruas-mais-bonitas-de-lisboa-1.jpg",
        "description": "lorem impsum dolor et nominum papis supremo et aqua",
        "date": "10/03/2022",
        "time": "15:30",
        "status": "Pending"
      },
      {
        "name": "Pub Crawl",
        "image": "ruas-mais-bonitas-de-lisboa-1.jpg",
        "description": "lorem impsum dolor et nominum papis supremo et aqua",
        "date": "10/03/2022",
        "time": "15:30",
        "status": "Booked"
      },
      {
        "name": "Live music",
        "image": "ruas-mais-bonitas-de-lisboa-1.jpg",
        "description": "lorem impsum dolor et nominum papis supremo et aqua",
        "date": "10/03/2022",
        "time": "15:30",
        "status": "Booked"
      },
      {
        "name": "Food tour",
        "image": "ruas-mais-bonitas-de-lisboa-1.jpg",
        "description": "lorem impsum dolor et nominum papis supremo et aqua",
        "date": "10/03/2022",
        "time": "15:30",
        "status": "Pending"
      },
    ]
  }

  bookings: any
  type: string;


  constructor() { }

  ngOnInit() {
    this.type = 'booked';
    this.bookings = this.mockData.tours
  }

}
