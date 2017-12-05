import { Component } from '@angular/core';
import { NavController, NavParams , LoadingController  } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { DetailsPage } from '../details/details';



/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-news',
  templateUrl: 'news.html'

})
export class NewsPage {
   news: any;
   loading:any;
   filter = "-id";
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http , public loadingCtrl: LoadingController) {
      this.presentLoadingDefault();	  
	  this.http.get('http://igapi.ignitedminds.net/api/index.php?page=getNews').map(res => res.json()).subscribe(data => {
       this.news = data ; 
	   
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
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