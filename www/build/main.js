webpackJsonp([7],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__details_details__ = __webpack_require__(48);
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
    function NewsPage(navCtrl, navParams, http, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.filter = "-id";
        this.presentLoadingDefault();
        this.http.get('http://igapi.ignitedminds.net/api/index.php?page=getNews').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.news = data;
            _this.endLoading();
        });
    }
    NewsPage.prototype.openNews = function (news, id, title) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__details_details__["a" /* DetailsPage */], {
            id: id,
            news: news,
            title: title
        });
    };
    NewsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewsPage');
    };
    NewsPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    NewsPage.prototype.endLoading = function () {
        this.loading.dismiss();
    };
    NewsPage.prototype.apply = function (id) {
        this.filter = id;
    };
    return NewsPage;
}());
NewsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-news',template:/*ion-inline-start:"/home/saniya/Documents/saniya ig/ignitedminds/src/pages/news/news.html"*/'<!--\n\n  Generated template for the NewsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="md-more"></ion-icon>\n\n    </button>\n\n    <ion-title>News</ion-title>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let n of news" (click)="openNews(n.content,n.id,n.title)">\n\n      {{n.title}}\n\n      <ion-icon name="ios-arrow-forward" class="icons" item-end></ion-icon>\n\n      <p>{{n.date | amCalendar}}</p>\n\n    </button>\n\n\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/home/saniya/Documents/saniya ig/ignitedminds/src/pages/news/news.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], NewsPage);

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentAffairsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__details_details__ = __webpack_require__(48);
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
    function CurrentAffairsPage(navCtrl, navParams, http, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.filter = "-id";
        this.presentLoadingDefault();
        this.http.get('http://igapi.ignitedminds.net/api/index.php?page=getCurrent').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.current = data;
            _this.endLoading();
        });
    }
    CurrentAffairsPage.prototype.openNews = function (current, id, title) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__details_details__["a" /* DetailsPage */], {
            id: id,
            news: current,
            title: title
        });
    };
    CurrentAffairsPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    CurrentAffairsPage.prototype.endLoading = function () {
        this.loading.dismiss();
    };
    CurrentAffairsPage.prototype.apply = function (id) {
        this.filter = id;
    };
    return CurrentAffairsPage;
}());
CurrentAffairsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-current-affairs',template:/*ion-inline-start:"/home/saniya/Documents/saniya ig/ignitedminds/src/pages/current-affairs/current-affairs.html"*/'<!--\n  Generated template for the CurrentAffairsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="md-more"></ion-icon>\n    </button>\n    <ion-title>Current Affairs</ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let n of current" (click)="openNews(n.content,n.id,n.title)">\n      {{n.title}}\n      <ion-icon name="ios-arrow-forward" class="icons" item-end></ion-icon>\n      <p>{{n.date | amCalendar}}</p>\n    </button>\n\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/saniya/Documents/saniya ig/ignitedminds/src/pages/current-affairs/current-affairs.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], CurrentAffairsPage);

//# sourceMappingURL=current-affairs.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactPage = (function () {
    function ContactPage(navCtrl, navParams, http, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.presentLoadingDefault();
        this.http.get('http://igapi.ignitedminds.net/api/index.php?page=getContact').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.contactUs = data;
            _this.endLoading();
        });
    }
    ContactPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    ContactPage.prototype.endLoading = function () {
        this.loading.dismiss();
    };
    ContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CoursesPage');
    };
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-contact',template:/*ion-inline-start:"/home/saniya/Documents/saniya ig/ignitedminds/src/pages/contact/contact.html"*/'<!--\n  Generated template for the ContactPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="md-more"></ion-icon>\n    </button>\n    <ion-title>Contact Us</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card *ngFor="let n of contactUs">\n <!--<img  src="http://maps.googleapis.com/maps/api/staticmap?zoom=13&size=570x300&scale=2&maptype=roadmap&markers=color:red%7Clabel:S%7C{{n.lat}},{{n.lang}}">-->\n    <ion-card-content>\n      <ion-card-title>\n       <p class="address"> Address</p>\n      </ion-card-title>\n      <p>\n        {{n.address}}\n      </p>\n\n      <ion-item *ngIf="n.phone1 !=\'\'">\n        <h2>{{n.phone1}}</h2>\n        <button ion-button clear item-end>\n          <ion-icon name="call"></ion-icon>\n        </button>\n      </ion-item>\n\n      <ion-item *ngIf="n.phone2 !=\'\'">\n        <h2>{{n.phone2}}</h2>\n        <button ion-button clear item-end>\n          <ion-icon name="call"></ion-icon>\n        </button>\n      </ion-item>\n\n      <ion-item *ngIf="n.phone3 !=\'\'">\n        <h2>{{n.phone3}}</h2>\n        <button ion-button clear item-end>\n          <ion-icon name="call"></ion-icon>\n        </button>\n      </ion-item>\n\n      <ion-item *ngIf="n.phone4 !=\'\'">\n        <h2>{{n.phone4}}</h2>\n        <button ion-button clear item-end>\n          <ion-icon name="call"></ion-icon>\n        </button>\n      </ion-item>\n\n      <ion-item *ngIf="n.email1 !=\'\'">\n        <h2>{{n.email1}}</h2>\n        <button ion-button clear item-end>\n          <ion-icon name="mail"></ion-icon>\n        </button>\n      </ion-item>\n\n\n\n      <ion-item *ngIf="n.email2 !=\'\'">\n        <h2>{{n.email2}}</h2>\n        <button ion-button clear item-end>\n          <ion-icon name="mail"></ion-icon>\n        </button>\n      </ion-item>\n\n      <ion-item *ngIf="n.email3 !=\'\'">\n        <h2>{{n.email3}}</h2>\n        <button ion-button clear item-end>\n          <ion-icon name="mail"></ion-icon>\n        </button>\n      </ion-item>\n\n      <ion-item *ngIf="n.email4 !=\'\'">\n        <h2>{{n.email4}}</h2>\n        <button ion-button clear item-end>\n          <ion-icon name="mail"></ion-icon>\n        </button>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"/home/saniya/Documents/saniya ig/ignitedminds/src/pages/contact/contact.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
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
    function RegisterPage(navCtrl, camera, navParams, actionSheetCtrl, http, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.todo = {
            name: '',
            dob: '',
            address: '',
            phone: '',
            email: '',
            pincode: '',
            branch: '',
            photo: '',
            course: ''
        };
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.registerForm = function (form) {
        var _this = this;
        if (form.valid) {
            this.presentLoadingDefault();
            var link = 'http://igapi.ignitedminds.net/api/index.php?page=register';
            form.value.photo = this.photo;
            var data = JSON.stringify(form.value);
            this.http.post(link, data)
                .subscribe(function (data) {
                _this.presentToast();
                _this.endLoading();
                _this.todo = {
                    name: '',
                    dob: '',
                    address: '',
                    phone: '',
                    email: '',
                    pincode: '',
                    branch: '',
                    photo: '',
                    course: ""
                };
            }, function (error) {
                console.log("Oooops!");
            });
        }
    };
    RegisterPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    RegisterPage.prototype.endLoading = function () {
        this.loading.dismiss();
    };
    RegisterPage.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
    };
    RegisterPage.prototype.openImg = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Upload Image',
            buttons: [
                {
                    text: 'Camera',
                    handler: function () {
                        console.log('Camera clicked');
                        var options = {
                            quality: 100,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            sourceType: 1,
                            mediaType: _this.camera.MediaType.PICTURE
                        };
                        _this.camera.getPicture(options).then(function (imageData) {
                            // imageData is either a base64 encoded string or a file URI
                            // If it's base64
                            var base64Image = 'data:image/jpeg;base64,' + imageData;
                            _this.photo = base64Image;
                        }, function (err) {
                            // Handle error
                        });
                    }
                },
                {
                    text: 'Gallery',
                    handler: function () {
                        console.log('Gallery clicked');
                        var options = {
                            quality: 100,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            sourceType: 2,
                            mediaType: _this.camera.MediaType.PICTURE
                        };
                        _this.camera.getPicture(options).then(function (imageData) {
                            // imageData is either a base64 encoded string or a file URI
                            // If it's base64:
                            var base64Image = 'data:image/jpeg;base64,' + imageData;
                            _this.photo = base64Image;
                            var toast = _this.toastCtrl.create({
                                message: 'Photo selected.',
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.present();
                        }, function (err) {
                            // Handle error
                        });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    RegisterPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Your are successfully register.',
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-register',template:/*ion-inline-start:"/home/saniya/Documents/saniya ig/ignitedminds/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="md-more"></ion-icon>\n    </button>\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #form="ngForm" (ngSubmit)="registerForm(form)">\n    <ion-item>\n      <ion-label>Name*</ion-label>\n      <ion-input type="text" required [(ngModel)]="todo.name" ngControl="name" name="name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>DOB</ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="todo.dob" ngControl="dob" name="dob"></ion-datetime>\n    </ion-item>\n       <ion-item (click)="openImg()">\n      <ion-label style="color: #999;">Photo</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>Branch</ion-label>\n      <ion-select [(ngModel)]="branch" name="branches">\n        <ion-option value="karannagar">Karannagar</ion-option>\n        <ion-option value="nowgam">Nowgam</ion-option>\n        <ion-option value="parraypora">Parraypora</ion-option>\n        <ion-option value="baramulla">Baramulla</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Address*</ion-label>\n      <ion-textarea [(ngModel)]="todo.address" ngControl="address" required name="address"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label>Pincode*</ion-label>\n      <ion-input type="number" required [(ngModel)]="todo.pincode" ngControl="pincode" name="pincode"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Phone*</ion-label>\n      <ion-input type="text" required [(ngModel)]="todo.phone" ngControl="phone" name="phone"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Email*</ion-label>\n      <ion-input type="email" required [(ngModel)]="todo.email" ngControl="email" name="email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Course Applied For*</ion-label>\n      <ion-input type="text" required [(ngModel)]="todo.course" ngControl="course" name="course"></ion-input>\n    </ion-item>\n \n    <div class="col">\n      <br>\n      <br>\n      <button ion-button type="submit" block class="submit">Submit</button>\n    </div>\n  </form>\n\n</ion-content>'/*ion-inline-end:"/home/saniya/Documents/saniya ig/ignitedminds/src/pages/register/register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutUsPage = (function () {
    function AboutUsPage(navCtrl, navParams, http, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.presentLoadingDefault();
        this.http.get('http://igapi.ignitedminds.net/api/index.php?page=getAbout').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.aboutUs = data[0].content;
            _this.endLoading();
        });
    }
    AboutUsPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    AboutUsPage.prototype.endLoading = function () {
        this.loading.dismiss();
    };
    AboutUsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CoursesPage');
    };
    return AboutUsPage;
}());
AboutUsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-about-us',template:/*ion-inline-start:"/home/saniya/Documents/saniya ig/ignitedminds/src/pages/about-us/about-us.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="md-more"></ion-icon>\n    </button>\n    <ion-title>About Us</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n  <ion-content padding>\n    <ion-card>\n     <ion-card-content style="text-align:justify;" [innerHTML]="aboutUs">\n    \n     </ion-card-content>\n   \n   </ion-card>\n</ion-content>'/*ion-inline-end:"/home/saniya/Documents/saniya ig/ignitedminds/src/pages/about-us/about-us.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], AboutUsPage);

//# sourceMappingURL=about-us.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevelopedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
 * Generated class for the DevelopedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DevelopedPage = (function () {
    function DevelopedPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DevelopedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DevelopedPage');
    };
    return DevelopedPage;
}());
DevelopedPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-developed',template:/*ion-inline-start:"/home/saniya/Documents/saniya ig/ignitedminds/src/pages/developed/developed.html"*/'<!--\n  Generated template for the DevelopedPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="md-more"></ion-icon>\n        </button>\n    <ion-title>Developed By</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n\n<ion-card>\n     <ion-card-content>\n       <ion-card-title>\n        <p class="address"> Developed By </p>\n       </ion-card-title>\n       <p>\n        <b>Marina Technologies</b>\n\n       </p>\n \n       <ion-item >\n         <h2>HMT, Srinagar<br>\n            Jammu and Kashmir<br>\n            India-190012</h2>\n         <button ion-button clear item-end>\n           <ion-icon name="location"></ion-icon>\n         </button>\n       </ion-item>\n \n       <ion-item >\n          <h2> +91 9906447673 </h2>\n          <button ion-button clear item-end>\n            <ion-icon name="call"></ion-icon>\n          </button>\n        </ion-item>\n \n       <ion-item >\n         <h2>info@marinatech.net</h2>\n         <button ion-button clear item-end>\n           <ion-icon name="mail"></ion-icon>\n         </button>\n       </ion-item>\n\n       <ion-item >\n          <h2>http://marinatech.net/</h2>\n          <button ion-button clear item-end>\n            <ion-icon name="globe"></ion-icon>\n          </button>\n        </ion-item>\n \n     </ion-card-content>\n   </ion-card>\n \n \n \n </ion-content>\n'/*ion-inline-end:"/home/saniya/Documents/saniya ig/ignitedminds/src/pages/developed/developed.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], DevelopedPage);

//# sourceMappingURL=developed.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
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
 * Generated class for the LocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LocationPage = (function () {
    function LocationPage(navCtrl, navParams, http, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.presentLoadingDefault();
        this.http.get('http://igapi.ignitedminds.net/api/index.php?page=getContact').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.contactUs = data;
            _this.endLoading();
        });
    }
    LocationPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    LocationPage.prototype.endLoading = function () {
        this.loading.dismiss();
    };
    LocationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CoursesPage');
    };
    return LocationPage;
}());
LocationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-location',template:/*ion-inline-start:"/home/saniya/Documents/saniya ig/ignitedminds/src/pages/location/location.html"*/'<!--\n  Generated template for the LocationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Location</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n  <ion-card *ngFor="let n of contactUs">\n<img  src="http://maps.googleapis.com/maps/api/staticmap?zoom=13&size=570x300&scale=2&maptype=roadmap&markers=color:red%7Clabel:S%7C{{n.lat}},{{n.lang}}">\n    <ion-card-content>\n\n      <p>\n     <b> {{n.address}}</b>  \n      </p>\n\n    \n    </ion-card-content>\n  </ion-card>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/saniya/Documents/saniya ig/ignitedminds/src/pages/location/location.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], LocationPage);

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__details_details__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TimePage = (function () {
    function TimePage(navCtrl, navParams, http, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.filter = "-id";
        this.presentLoadingDefault();
        this.http.get('http://igapi.ignitedminds.net/api/index.php?page=getTime').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.news = data;
            _this.endLoading();
        });
    }
    TimePage.prototype.openNews = function (news, id, title) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__details_details__["a" /* DetailsPage */], {
            id: id,
            news: news,
            title: title
        });
    };
    TimePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewsPage');
    };
    TimePage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    TimePage.prototype.endLoading = function () {
        this.loading.dismiss();
    };
    TimePage.prototype.apply = function (id) {
        this.filter = id;
    };
    return TimePage;
}());
TimePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-time',template:/*ion-inline-start:"/home/saniya/Documents/saniya ig/ignitedminds/src/pages/time/time.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="md-more"></ion-icon>\n    </button>\n    <ion-title>Time Schedule</ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n\n\n<ion-card *ngFor="let n of news">\n  <ion-card-header>\n    {{n.title}}\n  </ion-card-header>\n  <ion-card-content [innerHTML]="n.content">\n \n  </ion-card-content>\n</ion-card>\n  \n\n</ion-content>'/*ion-inline-end:"/home/saniya/Documents/saniya ig/ignitedminds/src/pages/time/time.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], TimePage);

//# sourceMappingURL=time.js.map

/***/ }),

/***/ 153:
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
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/courses/courses.module": [
		725,
		6
	],
	"../pages/details/details.module": [
		726,
		5
	],
	"../pages/developed/developed.module": [
		727,
		4
	],
	"../pages/downloads/downloads.module": [
		728,
		3
	],
	"../pages/location/location.module": [
		729,
		2
	],
	"../pages/my-new/my-new.module": [
		730,
		0
	],
	"../pages/time/time.module": [
		731,
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
webpackAsyncContext.id = 196;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_downloads_downloads__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_news_news__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_current_affairs_current_affairs__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_register_register__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__courses_courses__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_us_about_us__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__time_time__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__location_location__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_map__);
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
    function HomePage(navCtrl, http, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.presentLoadingDefault();
        this.http.get('http://igapi.ignitedminds.net/api/index.php?page=getImages').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.imagesList = data;
            _this.endLoading();
        });
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
    HomePage.prototype.goToAbout = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages_about_us_about_us__["a" /* AboutUsPage */]);
    };
    HomePage.prototype.goToRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_register_register__["a" /* RegisterPage */]);
    };
    HomePage.prototype.goToCoursesPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__courses_courses__["a" /* CoursesPage */]);
    };
    // to check if we have permission
    HomePage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    HomePage.prototype.endLoading = function () {
        this.loading.dismiss();
    };
    HomePage.prototype.goTimeSchedule = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__time_time__["a" /* TimePage */]);
    };
    HomePage.prototype.goLocation = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__location_location__["a" /* LocationPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"/home/saniya/Documents/saniya ig/ignitedminds/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle right>\n      <ion-icon name="md-more"></ion-icon>\n    </button>\n   <img src="assets/imgs/logo1.png" > \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card >\n<ion-slides pager="true">\n    <ion-slide *ngFor="let n of imagesList" style="margin-top: 10px;">\n   <img src="http://igapi.ignitedminds.net/uploads/{{n.img}}" class="sliderImg">\n  </ion-slide>\n\n</ion-slides>\n\n</ion-card>\n\n<ion-card class="cardsTab" style="margin-top: 4px;">\n<div class="card">\n   <div class="container nav-flex">\n      <div class="wrapper" (click)="goToNews()">\n         <a class="reset">\n            <div class="iconWrapper bc-F">\n               <ion-icon name="logo-rss"></ion-icon>\n            </div>\n            <span>News</span>\n         </a>\n      </div>\n     \n      <div class="wrapper" (click)="goToCurrentaffairs()">\n         <a class="reset">\n            <div class="iconWrapper bc-F">\n               <ion-icon name="refresh-circle"></ion-icon>\n            </div>\n            <span>Current Affairs</span>\n         </a>\n      </div>\n      \n      <div class="wrapper" (click)="goToDownloads()">\n         <a class="reset">\n            <div class="iconWrapper bc-F">\n               <ion-icon name="cloud-download"></ion-icon>\n            </div>\n            <span>Downloads</span>\n         </a>\n      </div>\n	  \n	  <div class="wrapper" (click)="goToCoursesPage()">\n         <a class="reset">\n            <div class="iconWrapper bc-F">\n               <ion-icon name="document"></ion-icon>\n            </div>\n            <span>Courses</span>\n         </a>\n      </div>\n     \n      <div class="wrapper" (click)="goToRegister()">\n         <a class="reset">\n            <div class="iconWrapper bc-F">\n              <ion-icon name="school"></ion-icon>\n            </div>\n            <span>Online admission</span>\n         </a>\n      </div>\n      \n      <div class="wrapper" (click)="goToContactus()">\n         <a class="reset">\n            <div class="iconWrapper bc-F">\n               <ion-icon name="call"></ion-icon>\n            </div>\n            <span>Contact us</span>\n         </a>\n      </div>\n     \n   </div>\n</div>\n\n</ion-card>\n\n      <ion-card>\n	    <ion-card-header style="margin-top: 20px;">\n		 <label style="color: #ee1d23;font-size: 17px;font-weight: bold;margin-left:10px">  <ion-icon name="list-box" role="img" class="icon icon-md ion-md-list-box" aria-label="list box" ng-reflect-name="list-box"></ion-icon> Quick Links </label>\n		</ion-card-header>\n		\n		<div class=" mt-8">\n\n   <a  class="reset" (click)="goToAbout()">\n      <div class="discounts pFix">\n         <div class="discIcon">\n           <ion-icon name="link"></ion-icon>\n         </div>\n         <span class="navigation-link">About us</span>\n         <div class="nav-icon">\n            <svg width="18px" height="18px">\n               <g id="chevron-right">\n                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" style="fill: #757575"></path>\n               </g>\n            </svg>\n         </div>\n      </div>\n   </a>\n   \n   <a  class="reset" (click)="goLocation()">\n      <div class="discounts pFix">\n         <div class="discIcon">\n           <ion-icon name="link"></ion-icon>\n         </div>\n         <span class="navigation-link">Locations</span>\n         <div class="nav-icon">\n            <svg width="18px" height="18px">\n               <g id="chevron-right">\n                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" style="fill: #757575"></path>\n               </g>\n            </svg>\n         </div>\n      </div>\n   </a>\n   \n      <a  class="reset" (click)="goTimeSchedule()">\n      <div class="discounts pFix">\n         <div class="discIcon">\n           <ion-icon name="link"></ion-icon>\n         </div>\n         <span class="navigation-link">Time Schedule</span>\n         <div class="nav-icon">\n            <svg width="18px" height="18px">\n               <g id="chevron-right">\n                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" style="fill: #757575"></path>\n               </g>\n            </svg>\n         </div>\n      </div>\n   </a>\n   \n\n</div>\n	  </ion-card>              				\n\n\n</ion-content>\n'/*ion-inline-end:"/home/saniya/Documents/saniya ig/ignitedminds/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_11__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(402);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_news_news__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_downloads_downloads__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_current_affairs_current_affairs__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_register_register__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_about_us_about_us__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_details_details__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_courses_courses__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_time_time__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_developed_developed__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_location_location__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_camera__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_push__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_autostart__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angular2_moment__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ng2_order_pipe__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ng2_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_ng2_order_pipe__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

























var AppModule = (function () {
    function AppModule(autostart) {
        this.autostart = autostart;
        this.autostart.enable();
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_news_news__["a" /* NewsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_downloads_downloads__["a" /* DownloadsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_details_details__["a" /* DetailsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_about_us_about_us__["a" /* AboutUsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_current_affairs_current_affairs__["a" /* CurrentAffairsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_courses_courses__["a" /* CoursesPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_time_time__["a" /* TimePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_developed_developed__["a" /* DevelopedPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_location_location__["a" /* LocationPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_23_angular2_moment__["MomentModule"],
            __WEBPACK_IMPORTED_MODULE_24_ng2_order_pipe__["Ng2OrderModule"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/courses/courses.module#CoursesPageModule', name: 'CoursesPage', segment: 'courses', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/details/details.module#DetailsPageModule', name: 'DetailsPage', segment: 'details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/developed/developed.module#DevelopedPageModule', name: 'DevelopedPage', segment: 'developed', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/downloads/downloads.module#DownloadsPageModule', name: 'DownloadsPage', segment: 'downloads', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/location/location.module#LocationPageModule', name: 'LocationPage', segment: 'location', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/my-new/my-new.module#MyNewPageModule', name: 'MyNewPage', segment: 'my-new', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/time/time.module#TimePageModule', name: 'TimePage', segment: 'time', priority: 'low', defaultHistory: [] }
                ]
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_12__pages_about_us_about_us__["a" /* AboutUsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_details_details__["a" /* DetailsPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_current_affairs_current_affairs__["a" /* CurrentAffairsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_downloads_downloads__["a" /* DownloadsPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_news_news__["a" /* NewsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_courses_courses__["a" /* CoursesPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_time_time__["a" /* TimePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_developed_developed__["a" /* DevelopedPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_location_location__["a" /* LocationPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_push__["a" /* Push */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_autostart__["a" /* Autostart */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_camera__["a" /* Camera */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] }
        ]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_22__ionic_native_autostart__["a" /* Autostart */]])
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_downloads_downloads__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_news_news__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_current_affairs_current_affairs__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_register_register__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_about_us_about_us__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_courses_courses__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_developed_developed__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_push__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_rxjs_add_operator_map__);
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
    function MyApp(platform, statusBar, splashScreen, push, alertCtrl, http) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.push = push;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'News', component: __WEBPACK_IMPORTED_MODULE_7__pages_news_news__["a" /* NewsPage */] },
            { title: 'Current Affairs', component: __WEBPACK_IMPORTED_MODULE_8__pages_current_affairs_current_affairs__["a" /* CurrentAffairsPage */] },
            { title: 'Downloads', component: __WEBPACK_IMPORTED_MODULE_5__pages_downloads_downloads__["a" /* DownloadsPage */] },
            { title: 'Register', component: __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */] },
            { title: 'Courses', component: __WEBPACK_IMPORTED_MODULE_11__pages_courses_courses__["a" /* CoursesPage */] },
            { title: 'About Us', component: __WEBPACK_IMPORTED_MODULE_10__pages_about_us_about_us__["a" /* AboutUsPage */] },
            { title: 'Contact Us', component: __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */] },
            { title: 'Developed By', component: __WEBPACK_IMPORTED_MODULE_12__pages_developed_developed__["a" /* DevelopedPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.pushsetup();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.pushsetup = function () {
        var _this = this;
        var options = {
            android: {},
            ios: {
                alert: 'true',
                badge: true,
                sound: 'false'
            },
            windows: {}
        };
        var pushObject = this.push.init(options);
        pushObject.on('notification').subscribe(function (notification) {
            if (notification.additionalData.foreground) {
                var youralert = _this.alertCtrl.create({
                    title: 'New Push notification',
                    message: notification.message
                });
                youralert.present();
            }
        });
        pushObject.on('registration').subscribe(function (registration) {
            _this.saveDeviceToken(registration.registrationId);
        });
        pushObject.on('error').subscribe(function (error) { return alert('Error with Push plugin' + error); });
    };
    MyApp.prototype.saveDeviceToken = function (t) {
        this.http.get('http://igapi.ignitedminds.net/api/index.php?page=saveToken&type=f&token=' + t).
            map(function (res) { return res.json(); }).subscribe(function (data) {
            // alert(JSON.stringify(data));
        }, function (err) {
            console.log("Oops!");
        });
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/saniya/Documents/saniya ig/ignitedminds/src/app/app.html"*/'<ion-menu [content]="content">\n <ion-header>\n    <ion-toolbar  menuClose>\n      <ion-title class="text-left" style="color:#fff;"><ion-icon name="md-home"></ion-icon>&nbsp;\n      <span class="redDot"></span> &nbsp;Ignited Minds</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/saniya/Documents/saniya ig/ignitedminds/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_13__ionic_native_push__["a" /* Push */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_14__angular_http__["a" /* Http */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailsPage = (function () {
    function DetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.title = navParams.get('title');
        this.news = this.navParams.get('news');
    }
    DetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailsPage');
    };
    return DetailsPage;
}());
DetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-details',template:/*ion-inline-start:"/home/saniya/Documents/saniya ig/ignitedminds/src/pages/details/details.html"*/'<!--\n  Generated template for the DetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n <ion-card>\n\n  <ion-card-header>\n  <b> {{title}}</b>\n  </ion-card-header>\n\n  <ion-card-content style="text-align:justify;" [innerHTML] = "news"> \n \n  </ion-card-content>\n\n</ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/saniya/Documents/saniya ig/ignitedminds/src/pages/details/details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], DetailsPage);

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-list',template:/*ion-inline-start:"/home/saniya/Documents/saniya ig/ignitedminds/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/saniya/Documents/saniya ig/ignitedminds/src/pages/list/list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 720:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 267,
	"./af.js": 267,
	"./ar": 268,
	"./ar-dz": 269,
	"./ar-dz.js": 269,
	"./ar-kw": 270,
	"./ar-kw.js": 270,
	"./ar-ly": 271,
	"./ar-ly.js": 271,
	"./ar-ma": 272,
	"./ar-ma.js": 272,
	"./ar-sa": 273,
	"./ar-sa.js": 273,
	"./ar-tn": 274,
	"./ar-tn.js": 274,
	"./ar.js": 268,
	"./az": 275,
	"./az.js": 275,
	"./be": 276,
	"./be.js": 276,
	"./bg": 277,
	"./bg.js": 277,
	"./bm": 278,
	"./bm.js": 278,
	"./bn": 279,
	"./bn.js": 279,
	"./bo": 280,
	"./bo.js": 280,
	"./br": 281,
	"./br.js": 281,
	"./bs": 282,
	"./bs.js": 282,
	"./ca": 283,
	"./ca.js": 283,
	"./cs": 284,
	"./cs.js": 284,
	"./cv": 285,
	"./cv.js": 285,
	"./cy": 286,
	"./cy.js": 286,
	"./da": 287,
	"./da.js": 287,
	"./de": 288,
	"./de-at": 289,
	"./de-at.js": 289,
	"./de-ch": 290,
	"./de-ch.js": 290,
	"./de.js": 288,
	"./dv": 291,
	"./dv.js": 291,
	"./el": 292,
	"./el.js": 292,
	"./en-au": 293,
	"./en-au.js": 293,
	"./en-ca": 294,
	"./en-ca.js": 294,
	"./en-gb": 295,
	"./en-gb.js": 295,
	"./en-ie": 296,
	"./en-ie.js": 296,
	"./en-nz": 297,
	"./en-nz.js": 297,
	"./eo": 298,
	"./eo.js": 298,
	"./es": 299,
	"./es-do": 300,
	"./es-do.js": 300,
	"./es-us": 301,
	"./es-us.js": 301,
	"./es.js": 299,
	"./et": 302,
	"./et.js": 302,
	"./eu": 303,
	"./eu.js": 303,
	"./fa": 304,
	"./fa.js": 304,
	"./fi": 305,
	"./fi.js": 305,
	"./fo": 306,
	"./fo.js": 306,
	"./fr": 307,
	"./fr-ca": 308,
	"./fr-ca.js": 308,
	"./fr-ch": 309,
	"./fr-ch.js": 309,
	"./fr.js": 307,
	"./fy": 310,
	"./fy.js": 310,
	"./gd": 311,
	"./gd.js": 311,
	"./gl": 312,
	"./gl.js": 312,
	"./gom-latn": 313,
	"./gom-latn.js": 313,
	"./gu": 314,
	"./gu.js": 314,
	"./he": 315,
	"./he.js": 315,
	"./hi": 316,
	"./hi.js": 316,
	"./hr": 317,
	"./hr.js": 317,
	"./hu": 318,
	"./hu.js": 318,
	"./hy-am": 319,
	"./hy-am.js": 319,
	"./id": 320,
	"./id.js": 320,
	"./is": 321,
	"./is.js": 321,
	"./it": 322,
	"./it.js": 322,
	"./ja": 323,
	"./ja.js": 323,
	"./jv": 324,
	"./jv.js": 324,
	"./ka": 325,
	"./ka.js": 325,
	"./kk": 326,
	"./kk.js": 326,
	"./km": 327,
	"./km.js": 327,
	"./kn": 328,
	"./kn.js": 328,
	"./ko": 329,
	"./ko.js": 329,
	"./ky": 330,
	"./ky.js": 330,
	"./lb": 331,
	"./lb.js": 331,
	"./lo": 332,
	"./lo.js": 332,
	"./lt": 333,
	"./lt.js": 333,
	"./lv": 334,
	"./lv.js": 334,
	"./me": 335,
	"./me.js": 335,
	"./mi": 336,
	"./mi.js": 336,
	"./mk": 337,
	"./mk.js": 337,
	"./ml": 338,
	"./ml.js": 338,
	"./mr": 339,
	"./mr.js": 339,
	"./ms": 340,
	"./ms-my": 341,
	"./ms-my.js": 341,
	"./ms.js": 340,
	"./my": 342,
	"./my.js": 342,
	"./nb": 343,
	"./nb.js": 343,
	"./ne": 344,
	"./ne.js": 344,
	"./nl": 345,
	"./nl-be": 346,
	"./nl-be.js": 346,
	"./nl.js": 345,
	"./nn": 347,
	"./nn.js": 347,
	"./pa-in": 348,
	"./pa-in.js": 348,
	"./pl": 349,
	"./pl.js": 349,
	"./pt": 350,
	"./pt-br": 351,
	"./pt-br.js": 351,
	"./pt.js": 350,
	"./ro": 352,
	"./ro.js": 352,
	"./ru": 353,
	"./ru.js": 353,
	"./sd": 354,
	"./sd.js": 354,
	"./se": 355,
	"./se.js": 355,
	"./si": 356,
	"./si.js": 356,
	"./sk": 357,
	"./sk.js": 357,
	"./sl": 358,
	"./sl.js": 358,
	"./sq": 359,
	"./sq.js": 359,
	"./sr": 360,
	"./sr-cyrl": 361,
	"./sr-cyrl.js": 361,
	"./sr.js": 360,
	"./ss": 362,
	"./ss.js": 362,
	"./sv": 363,
	"./sv.js": 363,
	"./sw": 364,
	"./sw.js": 364,
	"./ta": 365,
	"./ta.js": 365,
	"./te": 366,
	"./te.js": 366,
	"./tet": 367,
	"./tet.js": 367,
	"./th": 368,
	"./th.js": 368,
	"./tl-ph": 369,
	"./tl-ph.js": 369,
	"./tlh": 370,
	"./tlh.js": 370,
	"./tr": 371,
	"./tr.js": 371,
	"./tzl": 372,
	"./tzl.js": 372,
	"./tzm": 373,
	"./tzm-latn": 374,
	"./tzm-latn.js": 374,
	"./tzm.js": 373,
	"./uk": 375,
	"./uk.js": 375,
	"./ur": 376,
	"./ur.js": 376,
	"./uz": 377,
	"./uz-latn": 378,
	"./uz-latn.js": 378,
	"./uz.js": 377,
	"./vi": 379,
	"./vi.js": 379,
	"./x-pseudo": 380,
	"./x-pseudo.js": 380,
	"./yo": 381,
	"./yo.js": 381,
	"./zh-cn": 382,
	"./zh-cn.js": 382,
	"./zh-hk": 383,
	"./zh-hk.js": 383,
	"./zh-tw": 384,
	"./zh-tw.js": 384
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 720;

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__details_details__ = __webpack_require__(48);
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
 * Generated class for the CoursesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CoursesPage = (function () {
    function CoursesPage(navCtrl, navParams, http, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.presentLoadingDefault();
        this.http.get('http://igapi.ignitedminds.net/api/index.php?page=getCourses').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.courses = data;
            _this.endLoading();
        });
    }
    CoursesPage.prototype.openNews = function (news, id, title) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__details_details__["a" /* DetailsPage */], {
            id: id,
            news: news,
            title: title
        });
    };
    CoursesPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    CoursesPage.prototype.endLoading = function () {
        this.loading.dismiss();
    };
    CoursesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CoursesPage');
    };
    return CoursesPage;
}());
CoursesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-courses',template:/*ion-inline-start:"/home/saniya/Documents/saniya ig/ignitedminds/src/pages/courses/courses.html"*/'<!--\n  Generated template for the NewsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n <ion-navbar >\n    <button ion-button menuToggle>\n      <ion-icon name="md-more"></ion-icon>\n    </button>\n     <ion-title>Courses</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content >\n<ion-list >\n   <ion-item  *ngFor="let n of courses" (click)="openNews(n.content,n.id,n.title)">\n   {{n.title}}   <ion-icon name="ios-arrow-forward" class="icons" item-end></ion-icon>\n  </ion-item>  \n\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/saniya/Documents/saniya ig/ignitedminds/src/pages/courses/courses.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], CoursesPage);

//# sourceMappingURL=courses.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_transfer__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
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
    function DownloadsPage(navCtrl, navParams, platform, transfer, file, http, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.transfer = transfer;
        this.file = file;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.searchQuery = '';
        this.storageDirectory = '';
        this.initializeItems();
    }
    DownloadsPage.prototype.initializeItems = function () {
        var _this = this;
        this.presentLoadingDefault();
        this.http.get('http://igapi.ignitedminds.net/api/index.php?page=getDownload').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.items = data;
            _this.endLoading();
        });
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
    DownloadsPage.prototype.downLoad = function (urlFile, title) {
        var _this = this;
        this.platform.ready().then(function () {
            var fileTransfer = _this.transfer.create();
            var url = urlFile;
            fileTransfer.download(url, _this.file.dataDirectory + "ignitedMinds/" + title + '.pdf').then(function (entry) {
                var alertSuccess = _this.alertCtrl.create({
                    title: "Download Succeeded!",
                    subTitle: "File was successfully downloaded",
                    buttons: ['Ok']
                });
                alertSuccess.present();
            }, function (error) {
                var alertFailure = _this.alertCtrl.create({
                    title: "Download Failed!",
                    subTitle: "File was not successfully downloaded. Error code:",
                    buttons: ['Ok']
                });
                alertFailure.present();
            });
        });
    };
    DownloadsPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    DownloadsPage.prototype.presentLoadingDefault = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    DownloadsPage.prototype.endLoading = function () {
        this.loading.dismiss();
    };
    return DownloadsPage;
}());
DownloadsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-downloads',template:/*ion-inline-start:"/home/saniya/Documents/saniya ig/ignitedminds/src/pages/downloads/downloads.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="md-more"></ion-icon>\n    </button>\n    <ion-title>Downloads</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  <ion-list>\n    <ion-item *ngFor="let item of items">\n      {{ item.title }}\n      <a item-end target="_BLANK" href="{{item.content}}">\n        <ion-icon name="cloud-download" ></ion-icon>\n      </a>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/saniya/Documents/saniya ig/ignitedminds/src/pages/downloads/downloads.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__ionic_native_transfer__["a" /* Transfer */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_transfer__["b" /* TransferObject */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_transfer__["a" /* Transfer */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], DownloadsPage);

//# sourceMappingURL=downloads.js.map

/***/ })

},[397]);
//# sourceMappingURL=main.js.map