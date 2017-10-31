webpackJsonp([3],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewsPage = (function () {
    function NewsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NewsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewsPage');
    };
    return NewsPage;
}());
NewsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-news',template:/*ion-inline-start:"/home/saniya/Documents/ignited/ig/src/pages/news/news.html"*/'<!--\n  Generated template for the NewsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n <ion-navbar>\n  <button ion-button menuToggle>\n      <ion-icon name="md-more"></ion-icon>\n    </button>\n     <ion-title>News</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content >\n<ion-list inset>\n  <!--<button ion-item *ngFor="let item of items" (click)="itemSelected(item)">\n    {{ item }}\n  </button>  -->\n   <button ion-item >\n    News 1   <ion-icon name="ios-arrow-forward" class="icons"></ion-icon>\n  </button>  \n    <button ion-item >\n    News 2   <ion-icon name="ios-arrow-forward" class="icons"></ion-icon>\n  </button>  \n   <button ion-item >\n    News 3   <ion-icon name="ios-arrow-forward" class="icons"></ion-icon>\n  </button>  \n    <button ion-item >\n    News 4   <ion-icon name="ios-arrow-forward" class="icons"></ion-icon>\n  </button> \n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/saniya/Documents/ignited/ig/src/pages/news/news.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], NewsPage);

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentAffairsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CurrentAffairsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CurrentAffairsPage = (function () {
    function CurrentAffairsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CurrentAffairsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CurrentAffairsPage');
    };
    return CurrentAffairsPage;
}());
CurrentAffairsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-current-affairs',template:/*ion-inline-start:"/home/saniya/Documents/ignited/ig/src/pages/current-affairs/current-affairs.html"*/'<!--\n  Generated template for the CurrentAffairsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n <ion-navbar>\n  <button ion-button menuToggle>\n      <ion-icon name="md-more"></ion-icon>\n    </button>\n     <ion-title>Current Affairs</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content >\n<ion-list >\n  <!--<button ion-item *ngFor="let item of items" (click)="itemSelected(item)">\n    {{ item }}\n  </button>  -->\n   <button ion-item >\n    News 1   <ion-icon name="ios-arrow-forward" class="icons"></ion-icon>\n  </button>  \n    <button ion-item >\n    News 2   <ion-icon name="ios-arrow-forward" class="icons"></ion-icon>\n  </button>  \n   <button ion-item >\n    News 3   <ion-icon name="ios-arrow-forward" class="icons"></ion-icon>\n  </button>  \n    <button ion-item >\n    News 4   <ion-icon name="ios-arrow-forward" class="icons"></ion-icon>\n  </button> \n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/saniya/Documents/ignited/ig/src/pages/current-affairs/current-affairs.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], CurrentAffairsPage);

//# sourceMappingURL=current-affairs.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.todo = {
            name: '',
            dob: '',
            address: '',
            photo: '',
            phone: '',
            email: '',
            pincode: ''
        };
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.registerForm = function (form) {
        console.log(form.value);
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"/home/saniya/Documents/ignited/ig/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  <button ion-button menuToggle>\n      <ion-icon name="md-more"></ion-icon>\n    </button>\n     <ion-title>Register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form #form="ngForm" (ngSubmit)="registerForm(form)" novalidate>\n      <ion-item>\n        <ion-label>Name*</ion-label>\n        <ion-input type="text" required [(ngModel)]="todo.name" ngControl="name" name="name"></ion-input>\n      </ion-item>\n         <ion-item>\n        <ion-label>DOB</ion-label>\n        <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="todo.dob" ngControl="dob" name="dob"></ion-datetime>\n      </ion-item>\n        <ion-item>\n        <ion-label>Photo</ion-label>\n        <ion-input type="file" [(ngModel)]="todo.photo" ngControl="photo" name="photo"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Address*</ion-label>\n        <ion-textarea [(ngModel)]="todo.address" ngControl="address" required name="address"></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <ion-label>Pincode*</ion-label>\n        <ion-input type="number" required [(ngModel)]="todo.pincode" ngControl="pincode" name="pincode"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Phone*</ion-label>\n        <ion-input type="text" required [(ngModel)]="todo.phone" ngControl="phone" name="phone"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Email*</ion-label>\n        <ion-input type="email" required [(ngModel)]="todo.email" ngControl="email" name="email"></ion-input>\n      </ion-item>\n      <div class="col">\n        <br><br>\n      <button ion-button type="submit" block class="submit">Submit</button>\n      </div>\n    </form>\n\n</ion-content>\n'/*ion-inline-end:"/home/saniya/Documents/ignited/ig/src/pages/register/register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/contact/contact.module": [
		271,
		2
	],
	"../pages/courses/courses.module": [
		272,
		0
	],
	"../pages/downloads/downloads.module": [
		273,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_downloads_downloads__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_news_news__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_current_affairs_current_affairs__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_register_register__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.goToContactus = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */]);
    };
    HomePage.prototype.goToDownloads = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_downloads_downloads__["a" /* DownloadsPage */]);
    };
    HomePage.prototype.goToNews = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_news_news__["a" /* NewsPage */]);
    };
    HomePage.prototype.goToCurrentaffairs = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_current_affairs_current_affairs__["a" /* CurrentAffairsPage */]);
    };
    HomePage.prototype.goToRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_register_register__["a" /* RegisterPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/saniya/Documents/ignited/ig/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="md-more"></ion-icon>\n    </button>\n   <img src="assets/imgs/logo1.png" > \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<img src="assets/imgs/slider1.jpg" style="width: 100%;height: 217px;">\n\n\n\n<ion-card>\n<div class="card">\n   <div class="container nav-flex">\n      <div class="wrapper" (click)="goToNews()">\n         <a class="reset">\n            <div class="iconWrapper bc-F">\n               <ion-icon name="logo-rss"></ion-icon>\n            </div>\n            <span>News</span>\n         </a>\n      </div>\n     \n      <div class="wrapper" (click)="goToCurrentaffairs()">\n         <a class="reset">\n            <div class="iconWrapper bc-F">\n               <ion-icon name="refresh-circle"></ion-icon>\n            </div>\n            <span>Current Affairs</span>\n         </a>\n      </div>\n      \n      <div class="wrapper" (click)="goToDownloads()">\n         <a class="reset">\n            <div class="iconWrapper bc-F">\n               <ion-icon name="cloud-download"></ion-icon>\n            </div>\n            <span>Downloads</span>\n         </a>\n      </div>\n	  \n	  <div class="wrapper">\n         <a class="reset">\n            <div class="iconWrapper bc-F">\n               <ion-icon name="refresh-circle"></ion-icon>\n            </div>\n            <span>Courses</span>\n         </a>\n      </div>\n     \n      <div class="wrapper" (click)="goToRegister()">\n         <a class="reset">\n            <div class="iconWrapper bc-F">\n              <ion-icon name="school"></ion-icon>\n            </div>\n            <span>Online admission</span>\n         </a>\n      </div>\n      \n      <div class="wrapper" (click)="goToContactus()">\n         <a class="reset">\n            <div class="iconWrapper bc-F">\n               <ion-icon name="contact"></ion-icon>\n            </div>\n            <span>Contact us</span>\n         </a>\n      </div>\n     \n   </div>\n</div>\n\n</ion-card>\n\n      <ion-card>\n	    <ion-card-header>\n		 <label style="color: #ee1d23;font-size: 20px;font-weight: bold;">  <ion-icon name="list-box" role="img" class="icon icon-md ion-md-list-box" aria-label="list box" ng-reflect-name="list-box"></ion-icon> QUICK LINKS </label>\n		</ion-card-header>\n		\n		<div class="card mt-8">\n\n   <a  class="reset">\n      <div class="discounts pFix">\n         <div class="discIcon">\n           <ion-icon name="link"></ion-icon>\n         </div>\n         <span class="navigation-link">Welcome to ignited minds</span>\n         <div class="nav-icon">\n            <svg width="18px" height="18px">\n               <g id="chevron-right">\n                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" style="fill: #757575"></path>\n               </g>\n            </svg>\n         </div>\n      </div>\n   </a>\n   \n   <a  class="reset">\n      <div class="discounts pFix">\n         <div class="discIcon">\n           <ion-icon name="link"></ion-icon>\n         </div>\n         <span class="navigation-link">What we offer this month?</span>\n         <div class="nav-icon">\n            <svg width="18px" height="18px">\n               <g id="chevron-right">\n                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" style="fill: #757575"></path>\n               </g>\n            </svg>\n         </div>\n      </div>\n   </a>\n   \n   <a  class="reset">\n      <div class="discounts pFix">\n         <div class="discIcon">\n           <ion-icon name="link"></ion-icon>\n         </div>\n         <span class="navigation-link">Ignited minds current affairs</span>\n         <div class="nav-icon">\n            <svg width="18px" height="18px">\n               <g id="chevron-right">\n                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" style="fill: #757575"></path>\n               </g>\n            </svg>\n         </div>\n      </div>\n   </a>\n   \n   <a  class="reset">\n      <div class="discounts pFix">\n         <div class="discIcon">\n           <ion-icon name="link"></ion-icon>\n         </div>\n         <span class="navigation-link">Special offers for students</span>\n         <div class="nav-icon">\n            <svg width="18px" height="18px">\n               <g id="chevron-right">\n                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" style="fill: #757575"></path>\n               </g>\n            </svg>\n         </div>\n      </div>\n   </a>\n</div>\n	  </ion-card>              				\n\n\n</ion-content>\n'/*ion-inline-end:"/home/saniya/Documents/ignited/ig/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutUsPage = (function () {
    function AboutUsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutUsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutUsPage');
    };
    return AboutUsPage;
}());
AboutUsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about-us',template:/*ion-inline-start:"/home/saniya/Documents/ignited/ig/src/pages/about-us/about-us.html"*/'<!--\n  Generated template for the AboutUsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n     <button ion-button menuToggle>\n      <ion-icon name="md-more"></ion-icon>\n    </button>\n    <ion-title>About Us</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/saniya/Documents/ignited/ig/src/pages/about-us/about-us.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], AboutUsPage);

//# sourceMappingURL=about-us.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_news_news__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_downloads_downloads__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_current_affairs_current_affairs__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_register_register__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_about_us_about_us__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_news_news__["a" /* NewsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_downloads_downloads__["a" /* DownloadsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_about_us_about_us__["a" /* AboutUsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_current_affairs_current_affairs__["a" /* CurrentAffairsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/courses/courses.module#CoursesPageModule', name: 'CoursesPage', segment: 'courses', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/downloads/downloads.module#DownloadsPageModule', name: 'DownloadsPage', segment: 'downloads', priority: 'low', defaultHistory: [] }
                ]
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_11__pages_about_us_about_us__["a" /* AboutUsPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_current_affairs_current_affairs__["a" /* CurrentAffairsPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_downloads_downloads__["a" /* DownloadsPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_news_news__["a" /* NewsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__["a" /* ContactPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_downloads_downloads__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_news_news__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_current_affairs_current_affairs__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_register_register__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_about_us_about_us__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'News', component: __WEBPACK_IMPORTED_MODULE_7__pages_news_news__["a" /* NewsPage */] },
            { title: 'Current Affairs', component: __WEBPACK_IMPORTED_MODULE_8__pages_current_affairs_current_affairs__["a" /* CurrentAffairsPage */] },
            { title: 'Downloads', component: __WEBPACK_IMPORTED_MODULE_5__pages_downloads_downloads__["a" /* DownloadsPage */] },
            { title: 'Register', component: __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */] },
            { title: 'Courses', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'About Us', component: __WEBPACK_IMPORTED_MODULE_10__pages_about_us_about_us__["a" /* AboutUsPage */] },
            { title: 'Contact Us', component: __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/saniya/Documents/ignited/ig/src/app/app.html"*/'<ion-menu [content]="content">\n <ion-header>\n    <ion-toolbar  menuClose>\n      <ion-title class="text-left" style="color:#fff;"><ion-icon name="md-home"></ion-icon>&nbsp;\n      <span class="redDot"></span> &nbsp;Ignited Minds</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/saniya/Documents/ignited/ig/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"/home/saniya/Documents/ignited/ig/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/saniya/Documents/ignited/ig/src/pages/list/list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactPage = (function () {
    function ContactPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = "civil";
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactPage');
    };
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"/home/saniya/Documents/ignited/ig/src/pages/contact/contact.html"*/'<!--\n  Generated template for the ContactPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  <button ion-button menuToggle>\n      <ion-icon name="md-more"></ion-icon>\n    </button>\n    <ion-title>Contact Us</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n\n\n  <ion-segment [(ngModel)]="menu">\n    <ion-segment-button value="civil">\n      Civil Service\n    </ion-segment-button>\n    <ion-segment-button value="jee">\n      JEE, NEET, JKCET \n    </ion-segment-button>\n  </ion-segment>\n\n\n<div [ngSwitch]="menu">\n  <ion-list *ngSwitchCase="\'civil\'">\n<ion-card>\n  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d211439.4686697148!2d74.728271!3d34.101757!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8848d4a97cdefe3!2sIgnited+Minds+-+Civil+Service+IAS%2FKAS+Coaching+Center+%7C+Coaching+for+SSB+Banking+Exams+in+Srinagar!5e0!3m2!1sen!2sin!4v1509382320163" frameborder="0" style="width: 100%;height: 290px;" allowfullscreen></iframe>\n  <ion-card-content>\n    <ion-card-title>\n       Address : \n      </ion-card-title>\n    <p>\n     <b> Head Office : </b> Ignited Minds, Opposite Lake City Plaza, Karan Nagar, Srinagar-190010 <br>\n	\n    </p>\n	\n	<ion-list>\n  <ion-item>\n    <h2>+91 0194-2503227</h2>\n    <button ion-button clear item-end>  <ion-icon name="call"></ion-icon></button>\n  </ion-item>\n  \n    <ion-item>\n    <h2>+91 9070898007</h2>\n    <button ion-button clear item-end>  <ion-icon name="call"></ion-icon></button>\n  </ion-item>\n  \n    <ion-item>\n    <h2>+91 979679787</h2>\n    <button ion-button clear item-end>  <ion-icon name="call"></ion-icon></button>\n  </ion-item>\n  \n    <ion-item>\n    <h2>+91 9697954618</h2>\n    <button ion-button clear item-end>  <ion-icon name="call"></ion-icon></button>\n  </ion-item>\n  \n  <ion-item>\n    <h2>iminds30@gmail.com</h2>\n    <button ion-button clear item-end>   <ion-icon name="mail"></ion-icon></button>\n  </ion-item>\n</ion-list>\n  </ion-card-content>\n</ion-card>\n  </ion-list>\n\n  <ion-list *ngSwitchCase="\'jee\'">\n<ion-card>\n  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d845810.9607856789!2d74.84453436227197!3d34.09644525539076!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x55882598035ecc80!2sIgnited+Minds+-+JEE%2C+NEET%2C+JKCET+Coaching+Centres+%7C+Coaching+for+11th+%26+12th+Classes!5e0!3m2!1sen!2sin!4v1509385149584" frameborder="0" style="width: 100%;height: 290px;" allowfullscreen></iframe>\n  <ion-card-content>\n    <ion-card-title>\n       Address : \n      </ion-card-title>\n    <p>\n     <b> Branch Office : </b> Ignited Minds, Opposite Gee-Enn Sons, Behind 14th Avenue, Parraypora, Srinagar-190005 <br>\n	\n    </p>\n	\n	<ion-list>\n  <ion-item>\n    <h2>+91 9906463640</h2>\n    <button ion-button clear item-end>  <ion-icon name="call"></ion-icon></button>\n  </ion-item>\n  \n    <ion-item>\n    <h2>+91 9419247967</h2>\n    <button ion-button clear item-end>  <ion-icon name="call"></ion-icon></button>\n  </ion-item>\n  \n    <ion-item>\n    <h2> +91 9796979787</h2>\n    <button ion-button clear item-end>  <ion-icon name="call"></ion-icon></button>\n  </ion-item>\n  \n    <ion-item>\n    <h2> +91 9796133018</h2>\n    <button ion-button clear item-end>  <ion-icon name="call"></ion-icon></button>\n  </ion-item>\n  \n  <ion-item>\n    <h2>iminds30@gmail.com</h2>\n    <button ion-button clear item-end>   <ion-icon name="mail"></ion-icon></button>\n  </ion-item>\n</ion-list>\n  </ion-card-content>\n</ion-card>\n  </ion-list>\n</div>\n\n\n</ion-content>'/*ion-inline-end:"/home/saniya/Documents/ignited/ig/src/pages/contact/contact.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_transfer__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(251);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DownloadsPage = (function () {
    function DownloadsPage(navCtrl, navParams, platform, transfer, file) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.transfer = transfer;
        this.file = file;
        this.searchQuery = '';
        this.storageDirectory = '';
        this.initializeItems();
    }
    DownloadsPage.prototype.initializeItems = function () {
        this.items = [
            {
                title: "Economy Notes(August 21, 2017)",
                url: "http://www.ignitedminds.net/wp-content/uploads/2017/01/economy-notes.pdf"
            },
            {
                title: "Sustainable Development ( August 19, 2017 )",
                url: "http://www.ignitedminds.net/wp-content/uploads/2017/01/Sustainable-Development.pdf"
            },
            {
                title: "MISSION INDRADHANUSH (August 19, 2017)",
                url: "http://www.ignitedminds.net/wp-content/uploads/2017/01/MISSION-INDRADHANUSH.pdf"
            },
            {
                title: "Social Sector Initiatives 2(August 18, 2017 ))",
                url: "http://www.ignitedminds.net/wp-content/uploads/2017/01/Back-UPSocial-Sector-Initiatives.pdf"
            },
            {
                title: "Social Sector Initiatives(August 17, 2017)",
                url: "http://www.ignitedminds.net/wp-content/uploads/2017/01/Social-Sector-Initiatives.pdf"
            },
            {
                title: "Demography 2 (August 16, 2017)",
                url: "http://www.ignitedminds.net/wp-content/uploads/2017/01/Demography-2.pdf"
            },
            {
                title: "Financial Inclusion(August 16, 2017)",
                url: "http://www.ignitedminds.net/wp-content/uploads/2017/01/Financial-Inclusion.pdf"
            },
            {
                title: "Syllabus for SI 2017",
                url: "http://www.ignitedminds.net/wp-content/uploads/2017/01/Syllabus-for-SI_2017.pdf"
            },
            {
                title: "NPA and Demography(august 14, 2017)",
                url: "http://www.ignitedminds.net/wp-content/uploads/2017/01/NPA-and-Demography.pdf"
            },
            {
                title: "Goods and Services Tax(Read Thoroughly)",
                url: "http://www.ignitedminds.net/wp-content/uploads/2017/01/Goods-and-Services-Tax.pdf"
            },
            {
                title: "Inflation(August 11, 2017) The first two pages are FDI related",
                url: "http://www.ignitedminds.net/wp-content/uploads/2017/01/Inflation.pdf"
            },
            {
                title: "Budget FDI FII Tax(August-09-2017)",
                url: "http://www.ignitedminds.net/wp-content/uploads/2017/01/Budget.pdf"
            },
            {
                title: "WTO and Accounts of India (August 08, 2017)",
                url: "http://www.ignitedminds.net/wp-content/uploads/2017/01/WTO-and-Accounts-of-India.pdf"
            },
        ];
    };
    DownloadsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DownloadsPage');
    };
    DownloadsPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    DownloadsPage.prototype.downLoad = function (url, title) {
        var _this = this;
        this.platform.ready().then(function () {
            var fileTransfer = _this.transfer.create();
            var imageLocation = url;
            fileTransfer.download(imageLocation, _this.storageDirectory + title + '.pdf').then(function (entry) {
            }, function (error) {
            });
        });
    };
    DownloadsPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    return DownloadsPage;
}());
DownloadsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-downloads',template:/*ion-inline-start:"/home/saniya/Documents/ignited/ig/src/pages/downloads/downloads.html"*/'\n<ion-header>\n\n  <ion-navbar>\n     <button ion-button menuToggle>\n      <ion-icon name="md-more"></ion-icon>\n    </button>\n    <ion-title>Downloads</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n<ion-list>\n  <ion-item *ngFor="let item of items">\n    {{ item.title }}\n	 <ion-icon name="cloud-download" (click) = "downLoad(item.url,item.title)" item-end></ion-icon>\n  </ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/saniya/Documents/ignited/ig/src/pages/downloads/downloads.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__ionic_native_transfer__["a" /* Transfer */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_transfer__["b" /* TransferObject */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_transfer__["a" /* Transfer */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */]])
], DownloadsPage);

//# sourceMappingURL=downloads.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map