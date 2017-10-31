import { Component } from '@angular/core';
import { IonicPage,Platform, NavController, NavParams } from 'ionic-angular';
import {Transfer, TransferObject} from '@ionic-native/transfer';
import {File} from '@ionic-native/file';
declare var cordova:any;

@IonicPage()
@Component({
  selector: 'page-downloads',
  templateUrl: 'downloads.html',
  providers: [Transfer, TransferObject, File]
})
export class DownloadsPage {

  searchQuery: string = '';
  items: any;
  storageDirectory: string = '';
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public platform: Platform, private transfer: Transfer, private file: File) {
	  this.initializeItems();
  }

    initializeItems() {
    this.items = [
		{
			title:"Economy Notes(August 21, 2017)",
			url:"http://www.ignitedminds.net/wp-content/uploads/2017/01/economy-notes.pdf"
		},
		{
			title:"Sustainable Development ( August 19, 2017 )",
			url:"http://www.ignitedminds.net/wp-content/uploads/2017/01/Sustainable-Development.pdf"
		},
		{
			title:"MISSION INDRADHANUSH (August 19, 2017)",
			url:"http://www.ignitedminds.net/wp-content/uploads/2017/01/MISSION-INDRADHANUSH.pdf"
		},
		{
			title:"Social Sector Initiatives 2(August 18, 2017 ))",
			url:"http://www.ignitedminds.net/wp-content/uploads/2017/01/Back-UPSocial-Sector-Initiatives.pdf"
		},
		{
			title:"Social Sector Initiatives(August 17, 2017)",
			url:"http://www.ignitedminds.net/wp-content/uploads/2017/01/Social-Sector-Initiatives.pdf"
		},
		{
			title:"Demography 2 (August 16, 2017)",
			url:"http://www.ignitedminds.net/wp-content/uploads/2017/01/Demography-2.pdf"
		},
		{
			title:"Financial Inclusion(August 16, 2017)",
			url:"http://www.ignitedminds.net/wp-content/uploads/2017/01/Financial-Inclusion.pdf"
		},
		{
			title:"Syllabus for SI 2017",
			url:"http://www.ignitedminds.net/wp-content/uploads/2017/01/Syllabus-for-SI_2017.pdf"
		},
		{
			title:"NPA and Demography(august 14, 2017)",
			url:"http://www.ignitedminds.net/wp-content/uploads/2017/01/NPA-and-Demography.pdf"
		},
		{
			title:"Goods and Services Tax(Read Thoroughly)",
			url:"http://www.ignitedminds.net/wp-content/uploads/2017/01/Goods-and-Services-Tax.pdf"
		},
		{
			title:"Inflation(August 11, 2017) The first two pages are FDI related",
			url:"http://www.ignitedminds.net/wp-content/uploads/2017/01/Inflation.pdf"
		},
		{
			title:"Budget FDI FII Tax(August-09-2017)",
			url:"http://www.ignitedminds.net/wp-content/uploads/2017/01/Budget.pdf"
		},
		{
			title:"WTO and Accounts of India (August 08, 2017)",
			url:"http://www.ignitedminds.net/wp-content/uploads/2017/01/WTO-and-Accounts-of-India.pdf"
		},
    ];
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad DownloadsPage');
  }
  
   getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  downLoad(url,title){
   this.platform.ready().then(() => {

      const fileTransfer: TransferObject = this.transfer.create();

      const imageLocation = url;

      fileTransfer.download(imageLocation, this.storageDirectory + title +'.pdf').then((entry) => {
  

      }, (error) => {

        

      });

    });

  }
  
  goBack() {
	   this.navCtrl.pop(); 
  }
}
