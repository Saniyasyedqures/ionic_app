import { Component } from '@angular/core';
import { NavController, NavParams , LoadingController  } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { DetailsPage } from '../details/details';

/**
 * Generated class for the CurrentAffairsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-current-affairs',
  templateUrl: 'current-affairs.html',
})
export class CurrentAffairsPage {
    current: any;
	filter = "-id";
	loading:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http,public loadingCtrl: LoadingController) {
	   this.presentLoadingDefault();	  
	   this.http.get('http://igapi.ignitedminds.net/api/index.php?page=getCurrent').map(res => res.json()).subscribe(data => {
       this.current = data ; 
       this.endLoading();
    });
  }
  
  openNews (current,id,title){
	  this.navCtrl.push(DetailsPage,{
		  id:id,
		  news:current,
		  title:title
	  })
  }

  presentLoadingDefault() {
   this.loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });
  this.loading.present();
}
 endLoading(){
	  this.loading.dismiss();
 }
 apply(id){
	 this.filter  = id;
 }


}


