import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DownloadsPage } from '../pages/downloads/downloads';
import { ContactPage } from '../pages/contact/contact';
import { NewsPage } from '../pages/news/news';
import { CurrentAffairsPage } from '../pages/current-affairs/current-affairs';
import { RegisterPage } from '../pages/register/register';

import { AboutUsPage } from '../pages/about-us/about-us';

import { CoursesPage } from '../pages/courses/courses';

import { DevelopedPage } from '../pages/developed/developed';


import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private push: Push,
    public alertCtrl: AlertController,
    public http: Http
  ) {
    this.initializeApp();


    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'News', component: NewsPage },
      { title: 'Current Affairs', component: CurrentAffairsPage },
      { title: 'Downloads', component: DownloadsPage },
      { title: 'Register', component: RegisterPage },
      { title: 'Courses', component: CoursesPage },
      { title: 'About Us', component: AboutUsPage },
      { title: 'Contact Us', component: ContactPage },
      { title: 'Developed By', component: DevelopedPage },
      

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.pushsetup();

    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  pushsetup() {
    const options: PushOptions = {
      android: {
      },
      ios: {
        alert: 'true',
        badge: true,
        sound: 'false'
      },
      windows: {}
    };

    const pushObject: PushObject = this.push.init(options);

    pushObject.on('notification').subscribe((notification: any) => {
      if (notification.additionalData.foreground) {
        let youralert = this.alertCtrl.create({
          title: 'New Push notification',
          message: notification.message
        });
        youralert.present();
      }
    });

    pushObject.on('registration').subscribe((registration: any) => {
      this.saveDeviceToken(registration.registrationId);
    });

    pushObject.on('error').subscribe(error => alert('Error with Push plugin' + error));
  }

  saveDeviceToken(t) {
    this.http.get('http://igapi.ignitedminds.net/api/index.php?page=saveToken&type=f&token=' + t).
      map(res => res.json()).subscribe(data => {
        // alert(JSON.stringify(data));
      }, err => {
        console.log("Oops!");
      });
  }
}
