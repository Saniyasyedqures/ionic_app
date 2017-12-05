import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the LocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {
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