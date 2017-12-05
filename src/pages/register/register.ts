import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, LoadingController, ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  todo = {
    name: '',
    dob: '',
    address: '',
    phone: '',
    email: '',
    pincode: '',
    branch: '',
    photo: '',
    course:''
  };
  photo: any;
  loading: any;
  success: any;
  constructor(public navCtrl: NavController,
    private camera: Camera,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public http: Http,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registerForm(form) {
    if (form.valid) {
      this.presentLoadingDefault();
      var link = 'http://igapi.ignitedminds.net/api/index.php?page=register';
      form.value.photo = this.photo;
      var data = JSON.stringify(form.value);

      this.http.post(link, data)
        .subscribe(data => {
          this.presentToast();
          this.endLoading();
          this.todo = {
            name: '',
            dob: '',
            address: '',
            phone: '',
            email: '',
            pincode: '',
            branch: '',
            photo: '',
            course:""
          }
        }, error => {
          console.log("Oooops!");
        });
    }

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

  handleError(error) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

  openImg() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Upload Image',
      buttons: [
        {
          text: 'Camera',
          handler: () => {
            console.log('Camera clicked');
            const options: CameraOptions = {
              quality: 100,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              sourceType: 1,
              mediaType: this.camera.MediaType.PICTURE
            }

            this.camera.getPicture(options).then((imageData) => {
              // imageData is either a base64 encoded string or a file URI
              // If it's base64
              let base64Image = 'data:image/jpeg;base64,' + imageData;
              this.photo = base64Image;
            }, (err) => {
              // Handle error
            });
          }
        },
        {
          text: 'Gallery',
          handler: () => {
            console.log('Gallery clicked');
            const options: CameraOptions = {
              quality: 100,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              sourceType: 2,
              mediaType: this.camera.MediaType.PICTURE
            }

            this.camera.getPicture(options).then((imageData) => {
              // imageData is either a base64 encoded string or a file URI
              // If it's base64:
              let base64Image = 'data:image/jpeg;base64,' + imageData;
              this.photo = base64Image;
               let toast = this.toastCtrl.create({
                  message: 'Photo selected.',
                  duration: 3000,
                  position: 'bottom'
                });
                toast.present();
            }, (err) => {
              // Handle error
            });
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Your are successfully register.',
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}
