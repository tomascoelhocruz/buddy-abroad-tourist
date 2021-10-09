import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.page.html',
  styleUrls: ['./search-book.page.scss'],
})
export class SearchBookPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  mockData: any = {
    "books": [
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

  books: any

  // helper function to change simple array to x dimensional array
  arrayToMatrix = (array, columns) => Array(Math.ceil(array.length / columns)).fill('').reduce((acc, cur, index) => {
    return [...acc, [...array].splice(index * columns, columns)]
  }, [])


  ngOnInit() {
    this.books = this.arrayToMatrix(this.mockData.books, 2)

  }

  goback() {
    this.navCtrl.pop();
  }
}
