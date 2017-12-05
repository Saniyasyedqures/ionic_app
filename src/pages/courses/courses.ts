import { Component } from '@angular/core';
import { NavController, NavParams , LoadingController  } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { DetailsPage } from '../details/details';

/**
 * Generated class for the CoursesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-courses',
  templateUrl: 'courses.html',
})
export class CoursesPage {

    courses: any;
	loading:any;
    constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http,public loadingCtrl: LoadingController) {
	   this.presentLoadingDefault();
	   this.http.get('http://igapi.ignitedminds.net/api/index.php?page=getCourses').map(res => res.json()).subscribe(data => {
       this.courses= data ; 
	    this.endLoading();

    });
  }
  
  openNews (news,id,title){
	  this.navCtrl.push(DetailsPage,{
		  id:id,
		  news:news,
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoursesPage');
  }

}
