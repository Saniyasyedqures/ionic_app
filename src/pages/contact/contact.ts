import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  contactUs: any;
  loading: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public loadingCtrl: LoadingController) {
    this.presentLoadingDefault();
    this.http.get('http://igapi.ignitedminds.net/api/index.php?page=getContact').map(res => res.json()).subscribe(data => {
      this.contactUs = data;
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


