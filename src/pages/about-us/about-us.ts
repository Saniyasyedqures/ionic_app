import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-about-us',
  templateUrl: 'about-us.html',
})
export class AboutUsPage {

  aboutUs: any;
  loading: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public loadingCtrl: LoadingController) {
    this.presentLoadingDefault();
    this.http.get('http://igapi.ignitedminds.net/api/index.php?page=getAbout').map(res => res.json()).subscribe(data => {
      this.aboutUs = data[0].content;
      this.endLoading();

    });
  }


  presentLoadingDefault() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }
  endLoading() {
    this.loading.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoursesPage');
  }

}
