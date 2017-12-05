import { Component } from '@angular/core';
import { IonicPage, Platform, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { File } from '@ionic-native/file';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
declare var cordova: any;

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
  loading: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform,
    private transfer: Transfer,
    private file: File, public http: Http,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController) {
    this.initializeItems();
  }

  initializeItems() {
    this.presentLoadingDefault();
    this.http.get('http://igapi.ignitedminds.net/api/index.php?page=getDownload').map(res => res.json()).subscribe(data => {
      this.items = data;
      this.endLoading();
    });
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

  downLoad(urlFile, title) {

    this.platform.ready().then(() => {

      const fileTransfer: TransferObject = this.transfer.create();

      const url = urlFile;

      fileTransfer.download(url, this.file.dataDirectory + "ignitedMinds/" + title + '.pdf').then((entry) => {

        const alertSuccess = this.alertCtrl.create({
          title: "Download Succeeded!",
          subTitle: "File was successfully downloaded",
          buttons: ['Ok']
        });

        alertSuccess.present();

      }, (error) => {

        const alertFailure = this.alertCtrl.create({
          title: `Download Failed!`,
          subTitle: `File was not successfully downloaded. Error code:`,
          buttons: ['Ok']
        });

        alertFailure.present();

      });

    });

  }

  goBack() {
    this.navCtrl.pop();
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
}
