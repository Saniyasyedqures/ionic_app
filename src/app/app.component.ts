import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
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



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
	  { title: 'News', component: NewsPage },
	  { title: 'Current Affairs', component: CurrentAffairsPage },
	  { title: 'Downloads', component: DownloadsPage },
	  { title: 'Register', component: RegisterPage },
	  { title: 'Courses', component: HomePage },
      { title: 'About Us', component: AboutUsPage },
	  { title: 'Contact Us', component: ContactPage }

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
