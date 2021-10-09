import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-search-buddy',
  templateUrl: './search-buddy.page.html',
  styleUrls: ['./search-buddy.page.scss'],
})
export class SearchBuddyPage implements OnInit {
  
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goback() {
    this.navCtrl.pop();
  }


}
