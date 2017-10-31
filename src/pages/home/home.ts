import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DownloadsPage } from '../../pages/downloads/downloads';
import { NewsPage } from '../../pages/news/news';
import { CurrentAffairsPage } from '../../pages/current-affairs/current-affairs';
import { ContactPage } from '../../pages/contact/contact';
import { RegisterPage } from '../../pages/register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToContactus(){
    this.navCtrl.push(ContactPage);
  }

  goToDownloads(){
     this.navCtrl.push(DownloadsPage);
  }

  goToNews(){
    this.navCtrl.push(NewsPage);
  }

  goToCurrentaffairs(){
     this.navCtrl.push(CurrentAffairsPage);
  }

  goToRegister(){
    this.navCtrl.push(RegisterPage);
  }

}
