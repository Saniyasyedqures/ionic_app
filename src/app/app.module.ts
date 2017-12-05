import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule} from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { NewsPage } from '../pages/news/news';
import { DownloadsPage } from '../pages/downloads/downloads';
import { CurrentAffairsPage } from '../pages/current-affairs/current-affairs';
import { RegisterPage } from '../pages/register/register';
import { ContactPage } from '../pages/contact/contact';
import { AboutUsPage } from '../pages/about-us/about-us';
import { DetailsPage } from '../pages/details/details';
import {CoursesPage} from '../pages/courses/courses';
import {TimePage} from '../pages/time/time';
import { DevelopedPage } from '../pages/developed/developed';
import { LocationPage } from '../pages/location/location';

import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { Autostart } from '@ionic-native/autostart';

import { MomentModule } from 'angular2-moment';
import { Ng2OrderModule } from 'ng2-order-pipe';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    NewsPage,
    RegisterPage,
	DownloadsPage,
	ContactPage,
  DetailsPage,
  AboutUsPage,
  CurrentAffairsPage,
  CoursesPage,
  TimePage,
  DevelopedPage,
  LocationPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
	MomentModule,
	Ng2OrderModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutUsPage,
    DetailsPage,
    HomePage,
    RegisterPage,
    ListPage,
    CurrentAffairsPage,
	DownloadsPage,
  NewsPage,
	ContactPage,
	CoursesPage,
  TimePage,
  DevelopedPage,
  LocationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
	Push,
	Autostart ,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
	constructor(  private autostart: Autostart) {
		this.autostart.enable();
		
	}
}
