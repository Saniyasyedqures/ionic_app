import { Component } from '@angular/core';
import { NavController , LoadingController} from 'ionic-angular';
import { DownloadsPage } from '../../pages/downloads/downloads';
import { NewsPage } from '../../pages/news/news';
import { CurrentAffairsPage } from '../../pages/current-affairs/current-affairs';
import { ContactPage } from '../../pages/contact/contact';
import { RegisterPage } from '../../pages/register/register';
import {CoursesPage} from '../courses/courses';
import { AboutUsPage } from '../../pages/about-us/about-us';
import {TimePage} from '../time/time';
import { LocationPage } from '../location/location';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map'; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
loading:any;
imagesList:any;
  constructor(public navCtrl: NavController,public http: Http,public loadingCtrl: LoadingController) {
  this.presentLoadingDefault();	  
	   this.http.get('http://igapi.ignitedminds.net/api/index.php?page=getImages').map(res => res.json()).subscribe(data => {
       this.imagesList = data ; 
       this.endLoading();
  
  })
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

  goToAbout(){
     this.navCtrl.push(AboutUsPage);
  }

  goToRegister(){
    this.navCtrl.push(RegisterPage);
  }
  goToCoursesPage(){
    this.navCtrl.push(CoursesPage);
  }
// to check if we have permission
  presentLoadingDefault() {
   this.loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });
  this.loading.present();
}
 endLoading(){
	  this.loading.dismiss();
 }
 
 goTimeSchedule(){
	 this.navCtrl.push(TimePage);
 }

 goLocation(){
  this.navCtrl.push(LocationPage);
}

 

}
