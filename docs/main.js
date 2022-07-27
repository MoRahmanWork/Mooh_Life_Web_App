(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+Kwz":
/*!*******************************************************************************!*\
  !*** ./src/app/components/cards/card-line-chart/card-line-chart.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CardLineChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardLineChartComponent", function() { return CardLineChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_line_chart_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-line-chart.component.html */ "lLla");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ "MO+k");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_3__);




let CardLineChartComponent = class CardLineChartComponent {
    constructor() { }
    ngOnInit() { }
    ngAfterViewInit() {
        let config = {
            type: 'line',
            data: {
                labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December'
                ],
                datasets: [
                    {
                        label: new Date().getFullYear(),
                        backgroundColor: '#4c51bf',
                        borderColor: '#4c51bf',
                        data: [38483.0, 43983.0],
                        fill: false,
                    },
                    {
                        label: new Date().getFullYear() - 1,
                        backgroundColor: '#42f5bf',
                        borderColor: '#42f5bf',
                        data: [34316.0, 46340.0, 58919.0, 57750.0, 37333.0, 35041.0, 42236.0, 47167.0, 43791.0, 62228.0, 57005.0, 46306.0],
                        fill: false,
                    },
                    {
                        label: new Date().getFullYear() - 2,
                        fill: false,
                        backgroundColor: '#f5ef42',
                        borderColor: '#f5ef42',
                        data: [9351.0, 8672.0, 6439.0, 8659.0, 9439.0, 9138.0, 11323.0, 11681.0, 10784.0, 13547.0, 19626.0, 29002.0],
                    },
                    {
                        label: new Date().getFullYear() - 3,
                        fill: false,
                        backgroundColor: '#fff',
                        borderColor: '#fff',
                        data: [3458.0, 3855.0, 4098.0, 5351.0, 8575.0, 12407.0, 10086.0, 9598.0, 8294.0, 9200.0, 7761.0, 7194.0],
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                title: {
                    display: false,
                    text: 'Sales Charts',
                    fontColor: 'white',
                },
                legend: {
                    labels: {
                        fontColor: 'white',
                    },
                    align: 'end',
                    position: 'bottom',
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true,
                },
                scales: {
                    xAxes: [
                        {
                            ticks: {
                                fontColor: 'rgba(255,255,255,.7)',
                            },
                            display: true,
                            scaleLabel: {
                                display: false,
                                labelString: 'Month',
                                fontColor: 'white',
                            },
                            gridLines: {
                                display: false,
                                borderDash: [2],
                                borderDashOffset: [2],
                                color: 'rgba(33, 37, 41, 0.3)',
                                zeroLineColor: 'rgba(0, 0, 0, 0)',
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                fontColor: 'rgba(255,255,255,.7)',
                            },
                            display: true,
                            scaleLabel: {
                                display: false,
                                labelString: 'Value',
                                fontColor: 'white',
                            },
                            gridLines: {
                                borderDash: [3],
                                borderDashOffset: [3],
                                drawBorder: false,
                                color: 'rgba(255, 255, 255, 0.15)',
                                zeroLineColor: 'rgba(33, 37, 41, 0)',
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                },
            },
        };
        let ctx = document.getElementById('line-chart');
        ctx = ctx.getContext('2d');
        new chart_js__WEBPACK_IMPORTED_MODULE_3__["Chart"](ctx, config);
    }
};
CardLineChartComponent.ctorParameters = () => [];
CardLineChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-card-line-chart',
        template: _raw_loader_card_line_chart_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], CardLineChartComponent);



/***/ }),

/***/ "/GnJ":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/card-bar-chart/card-bar-chart.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\"\n>\n  <div class=\"rounded-t mb-0 px-4 py-3 bg-transparent\">\n    <div class=\"flex flex-wrap items-center\">\n      <div class=\"relative w-full max-w-full flex-grow flex-1\">\n        <h6 class=\"uppercase text-blueGray-400 mb-1 text-xs font-semibold\">\n          Performance\n        </h6>\n        <h2 class=\"text-blueGray-700 text-xl font-semibold\">Total orders</h2>\n      </div>\n    </div>\n  </div>\n  <div class=\"p-4 flex-auto\">\n    <!-- Chart -->\n    <div class=\"relative\" style=\"height: 350px\">\n      <canvas id=\"bar-chart\"></canvas>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "/ztn":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin/admin.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <app-sidebar></app-sidebar>\n  <div class=\"relative md:ml-64 bg-blueGray-100\">\n    <app-admin-navbar></app-admin-navbar>\n    <app-header-stats></app-header-stats>\n    <div class=\"px-4 md:px-10 mx-auto w-full -m-24\">\n      <router-outlet></router-outlet>\n      <app-footer-admin></app-footer-admin>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\9mora\OneDrive\notus-angular-main\src\main.ts */"zUnb");


/***/ }),

/***/ "0slC":
/*!*******************************************************************************!*\
  !*** ./src/app/components/dropdowns/user-dropdown/user-dropdown.component.ts ***!
  \*******************************************************************************/
/*! exports provided: UserDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDropdownComponent", function() { return UserDropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-dropdown.component.html */ "H3xT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @popperjs/core */ "EjV/");




let UserDropdownComponent = class UserDropdownComponent {
    constructor() {
        this.dropdownPopoverShow = false;
    }
    ngAfterViewInit() {
        Object(_popperjs_core__WEBPACK_IMPORTED_MODULE_3__["createPopper"])(this.btnDropdownRef.nativeElement, this.popoverDropdownRef.nativeElement, {
            placement: 'bottom-start',
        });
    }
    toggleDropdown(event) {
        event.preventDefault();
        if (this.dropdownPopoverShow) {
            this.dropdownPopoverShow = false;
        }
        else {
            this.dropdownPopoverShow = true;
        }
    }
};
UserDropdownComponent.propDecorators = {
    btnDropdownRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['btnDropdownRef', { static: false },] }],
    popoverDropdownRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['popoverDropdownRef', { static: false },] }]
};
UserDropdownComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-user-dropdown',
        template: _raw_loader_user_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], UserDropdownComponent);



/***/ }),

/***/ "1DoU":
/*!***************************************************************!*\
  !*** ./src/app/components/footers/footer/footer.component.ts ***!
  \***************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "CzbP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let FooterComponent = class FooterComponent {
    constructor() {
        this.date = new Date().getFullYear();
    }
    ngOnInit() { }
};
FooterComponent.ctorParameters = () => [];
FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-footer',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], FooterComponent);



/***/ }),

/***/ "3IhM":
/*!*********************************************************************************!*\
  !*** ./src/app/components/cards/card-page-visits/card-page-visits.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CardPageVisitsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPageVisitsComponent", function() { return CardPageVisitsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_page_visits_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-page-visits.component.html */ "L/HX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let CardPageVisitsComponent = class CardPageVisitsComponent {
    constructor() { }
    ngOnInit() { }
};
CardPageVisitsComponent.ctorParameters = () => [];
CardPageVisitsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-card-page-visits",
        template: _raw_loader_card_page_visits_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], CardPageVisitsComponent);



/***/ }),

/***/ "4b2p":
/*!***************************************************************************!*\
  !*** ./src/app/components/navbars/index-navbar/index-navbar.component.ts ***!
  \***************************************************************************/
/*! exports provided: IndexNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexNavbarComponent", function() { return IndexNavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_index_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./index-navbar.component.html */ "RORk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let IndexNavbarComponent = class IndexNavbarComponent {
    constructor() {
        this.navbarOpen = false;
    }
    ngOnInit() { }
    setNavbarOpen() {
        this.navbarOpen = !this.navbarOpen;
    }
};
IndexNavbarComponent.ctorParameters = () => [];
IndexNavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-index-navbar",
        template: _raw_loader_index_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], IndexNavbarComponent);



/***/ }),

/***/ "8GP7":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/profile/profile.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-auth-navbar></app-auth-navbar>\n<main class=\"profile-page\">\n\n  <section class=\"relative block h-500-px\">\n    <div\n      class=\"absolute top-0 w-full h-full bg-center bg-cover\"\n      style=\"\n        background-image: url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80');\n      \"\n    >\n      <span\n        id=\"blackOverlay\"\n        class=\"w-full h-full absolute opacity-50 bg-black\"\n      ></span>\n    </div>\n    <div\n      class=\"top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px\"\n      style=\"transform: translateZ(0)\"\n    >\n      <svg\n        class=\"absolute bottom-0 overflow-hidden\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        preserveAspectRatio=\"none\"\n        version=\"1.1\"\n        viewBox=\"0 0 2560 100\"\n        x=\"0\"\n        y=\"0\"\n      >\n        <polygon\n          class=\"text-blueGray-200 fill-current\"\n          points=\"2560 0 2560 100 0 100\"\n        ></polygon>\n      </svg>\n    </div>\n  </section>\n\n  <section class=\"relative py-16 bg-blueGray-200\">\n    <div class=\"container mx-auto px-4\">\n      <div\n        class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64\"\n      >\n        <div class=\"px-6\">\n          <div class=\"flex flex-wrap justify-center\">\n\n            <div class=\"w-full lg:w-3/12 px-4 lg:order-2 flex justify-center\">\n              <div class=\"relative\">\n                <img\n                  alt=\"...\"\n                  src=\"assets/img/mo.jpg\"\n                  class=\"shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px\"\n                />\n              </div>\n            </div>\n\n            <div\n              class=\"w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center\"\n            >\n              <div class=\"py-6 px-3 mt-32 sm:mt-0\">\n                <button\n                  class=\"bg-red-600 active:bg-red-700 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150\"\n                  type=\"button\"\n                >\n                  Connect\n                </button>\n              </div>\n            </div>\n\n            <div class=\"w-full lg:w-4/12 px-4 lg:order-1\">\n              <div class=\"flex justify-center py-4 lg:pt-4 pt-8\">\n                <div class=\"mr-4 p-3 text-center\">\n                  <span\n                    class=\"text-xl font-bold block uppercase tracking-wide text-blueGray-600\"\n                  >\n                    10\n                  </span>\n                  <span class=\"text-sm text-blueGray-400\">Friends</span>\n                </div>\n                <div class=\"mr-4 p-3 text-center\">\n                  <span\n                    class=\"text-xl font-bold block uppercase tracking-wide text-blueGray-600\"\n                  >\n                    420\n                  </span>\n                  <span class=\"text-sm text-blueGray-400\">Photos</span>\n                </div>\n                <div class=\"lg:mr-4 p-3 text-center\">\n                  <span\n                    class=\"text-xl font-bold block uppercase tracking-wide text-blueGray-600\"\n                  >\n                    69\n                  </span>\n                  <span class=\"text-sm text-blueGray-400\">Comments</span>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"text-center mt-12\">\n            <h3\n              class=\"text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2\"\n            >\n              Mooh\n            </h3>\n            <div\n              class=\"text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase\"\n            >\n              <i\n                class=\"fas fa-map-marker-alt mr-2 text-lg text-blueGray-400\"\n              ></i>\n              London, United Kingdom\n            </div>\n            <div class=\"mb-2 text-blueGray-600 mt-10\">\n              <i class=\"fas fa-briefcase mr-2 text-lg text-blueGray-400\"></i>\n              Quantitative Engineer\n            </div>\n            <div class=\"mb-2 text-blueGray-600\">\n              <i class=\"fas fa-university mr-2 text-lg text-blueGray-400\"></i>\n              University College London\n            </div>\n          </div>\n\n          <div class=\"mt-10 py-10 border-t border-blueGray-200 text-center\">\n            <div class=\"flex flex-wrap justify-center\">\n              <div class=\"w-full lg:w-9/12 px-4\">\n                <p class=\"mb-4 text-lg leading-relaxed text-blueGray-700\">\n                  A mathematical modelling graduate with a considerable range;\n                  with experience within finance & engineering.\n                  I spend my free time reading PhD Mathematics papers and\n                  trying to apply techniques to my interests within Financial Engineering.\n                </p>\n                <a href=\"javascript:void(0)\" class=\"font-normal text-red-600\">\n                  Show more\n                </a>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </section>\n</main>\n<app-footer></app-footer>\n");

/***/ }),

/***/ "AN84":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/landing/landing.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-auth-navbar></app-auth-navbar>\n<main>\n  <div\n    class=\"relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75\"\n  >\n\n    <div\n      class=\"absolute top-0 w-full h-full bg-center bg-cover\"\n      style=\"\n        background-image: url('assets/img/bghome.jpg');\n      \"\n    >\n      <span\n        id=\"blackOverlay\"\n        class=\"w-full h-full absolute opacity-75 bg-black\"\n      ></span>\n    </div>\n\n    <div class=\"container relative mx-auto\">\n      <div class=\"items-center flex flex-wrap\">\n        <div class=\"w-full lg:w-6/12 px-4 ml-auto mr-auto text-center\">\n          <div class=\"pr-12\">\n            <h1 class=\"text-white font-semibold text-5xl\">\n              This is Mooh's Story\n            </h1>\n            <p class=\"mt-4 text-lg text-blueGray-200\">\n              Welcome to Mooh's Landing page. A Little Background to Mooh's Life:\n              A bored dude that would like to create a personal website.\n              I dont have enough content yet to complete this, but look around :)\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div\n      class=\"top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px\"\n      style=\"transform: translateZ(0)\"\n    >\n      <svg\n        class=\"absolute bottom-0 overflow-hidden\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        preserveAspectRatio=\"none\"\n        version=\"1.1\"\n        viewBox=\"0 0 2560 100\"\n        x=\"0\"\n        y=\"0\"\n      >\n        <polygon\n          class=\"text-blueGray-200 fill-current\"\n          points=\"2560 0 2560 100 0 100\"\n        ></polygon>\n      </svg>\n    </div>\n\n  </div>\n\n  <section class=\"pb-20 bg-blueGray-200 -mt-24\">\n    <div class=\"container mx-auto px-4\">\n      <div class=\"flex flex-wrap\">\n\n        <div class=\"lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center\">\n          <div\n            class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg\"\n          >\n            <div class=\"px-4 py-5 flex-auto\">\n              <div\n                class=\"text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400\"\n              >\n                <i class=\"fas fa-award\"></i>\n              </div>\n              <h6 class=\"text-xl font-semibold\">Art</h6>\n              <p class=\"mt-2 mb-4 text-blueGray-500\">\n                I'd like to post some random art\n              </p>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"w-full md:w-4/12 px-4 text-center\">\n          <div\n            class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg\"\n          >\n            <div class=\"px-4 py-5 flex-auto\">\n              <div\n                class=\"text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400\"\n              >\n                <i class=\"fas fa-retweet\"></i>\n              </div>\n              <h6 class=\"text-xl font-semibold\">Bitcoin</h6>\n              <p class=\"mt-2 mb-4 text-blueGray-500\">\n                I'd like to produce some bitcoin models :)\n              </p>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"pt-6 w-full md:w-4/12 px-4 text-center\">\n          <div\n            class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg\"\n          >\n            <div class=\"px-4 py-5 flex-auto\">\n              <div\n                class=\"text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400\"\n              >\n                <i class=\"fas fa-fingerprint\"></i>\n              </div>\n              <h6 class=\"text-xl font-semibold\">Life</h6>\n              <p class=\"mt-2 mb-4 text-blueGray-500\">\n                I'd like to share some life information\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"flex flex-wrap items-center mt-32\">\n        <div class=\"w-full md:w-5/12 px-4 mr-auto ml-auto\">\n          <div\n            class=\"text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white\"\n          >\n            <i class=\"fas fa-user-friends text-xl\"></i>\n          </div>\n          <h3 class=\"text-3xl mb-2 font-semibold leading-normal\">\n            I enjoy Anime :)\n          </h3>\n          <p\n            class=\"text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600\"\n          >\n            I like anime\n          </p>\n          <p\n            class=\"text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600\"\n          >\n            I watch anime\n          </p>\n          <a [routerLink]=\"['/']\" class=\"font-bold text-blueGray-700 mt-8\">\n            Check out my Home Page\n          </a>\n        </div>\n\n        <div class=\"w-full md:w-4/12 px-4 mr-auto ml-auto\">\n          <div\n            class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-red-600\"\n          >\n            <img\n              alt=\"...\"\n              src=\"assets/img/Itachi_.jpg\"\n              class=\"w-full align-middle rounded-t-lg\"\n            />\n            <blockquote class=\"relative p-8 mb-4\">\n              <svg\n                preserveAspectRatio=\"none\"\n                xmlns=\"http://www.w3.org/2000/svg\"\n                viewBox=\"0 0 583 95\"\n                class=\"absolute left-0 w-full block h-95-px -top-94-px\"\n              >\n                <polygon\n                  points=\"-30,95 583,95 583,65\"\n                  class=\"text-red-600 fill-current\"\n                ></polygon>\n              </svg>\n              <h4 class=\"text-xl font-bold text-white\">Itachi Uchiha</h4>\n              <p class=\"text-md font-light mt-2 text-white\">\n                Itachi Uchiha is my favourite Anime Character\n              </p>\n            </blockquote>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"relative py-20\">\n    <div\n      class=\"bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20\"\n      style=\"transform: translateZ(0)\"\n    >\n      <svg\n        class=\"absolute bottom-0 overflow-hidden\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        preserveAspectRatio=\"none\"\n        version=\"1.1\"\n        viewBox=\"0 0 2560 100\"\n        x=\"0\"\n        y=\"0\"\n      >\n        <polygon\n          class=\"text-white fill-current\"\n          points=\"2560 0 2560 100 0 100\"\n        ></polygon>\n      </svg>\n    </div>\n\n    <div class=\"container mx-auto px-4\">\n      <div class=\"items-center flex flex-wrap\">\n        <div class=\"w-full md:w-4/12 ml-auto mr-auto px-4\">\n          <img\n            alt=\"...\"\n            class=\"max-w-full rounded-lg shadow-lg\"\n            src=\"/assets/img/pinnochio.jpg\"\n          />\n        </div>\n        <div class=\"w-full md:w-5/12 ml-auto mr-auto px-4\">\n          <div class=\"md:pr-12\">\n            <div\n              class=\"text-red-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-red-300\"\n            >\n              <i class=\"fas fa-rocket text-xl\"></i>\n            </div>\n            <h3 class=\"text-3xl font-semibold\">KDrama</h3>\n            <p class=\"mt-4 text-lg leading-relaxed text-blueGray-500\">\n              I like KDramas. Pinnochio is my favourite :)\n            </p>\n            <ul class=\"list-none mt-6\">\n              <li class=\"py-2\">\n                <div class=\"flex items-center\">\n                  <div>\n                    <span\n                      class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200 mr-3\"\n                    >\n                      <i class=\"fas fa-fingerprint\"></i>\n                    </span>\n                  </div>\n                  <div>\n                    <h4 class=\"text-blueGray-500\">\n                      Great storylines\n                    </h4>\n                  </div>\n                </div>\n              </li>\n              <li class=\"py-2\">\n                <div class=\"flex items-center\">\n                  <div>\n                    <span\n                      class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200 mr-3\"\n                    >\n                      <i class=\"fab fa-html5\"></i>\n                    </span>\n                  </div>\n                  <div>\n                    <h4 class=\"text-blueGray-500\">Great Actors</h4>\n                  </div>\n                </div>\n              </li>\n              <li class=\"py-2\">\n                <div class=\"flex items-center\">\n                  <div>\n                    <span\n                      class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200 mr-3\"\n                    >\n                      <i class=\"far fa-paper-plane\"></i>\n                    </span>\n                  </div>\n                  <div>\n                    <h4 class=\"text-blueGray-500\">Great Vibes</h4>\n                  </div>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"pt-20 pb-48\">\n    <div class=\"container mx-auto px-4\">\n      <div class=\"flex flex-wrap justify-center text-center mb-24\">\n        <div class=\"w-full lg:w-6/12 px-4\">\n          <h2 class=\"text-4xl font-semibold\">Here are some display pictures of me :)</h2>\n          <p class=\"text-lg leading-relaxed m-4 text-blueGray-500\">\n            Random Profile display pictures with links\n          </p>\n        </div>\n      </div>\n      <div class=\"flex flex-wrap\">\n        <div class=\"w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4\">\n          <div class=\"px-6\">\n            <img\n              alt=\"...\"\n              src=\"assets/img/mo.jpg\"\n              class=\"shadow-lg rounded-full mx-auto max-w-120-px\"\n            />\n            <div class=\"pt-6 text-center\">\n              <h5 class=\"text-xl font-bold\">Mo the Great</h5>\n              <p class=\"mt-1 text-sm text-blueGray-400 uppercase font-semibold\">\n                Web Developer\n              </p>\n              <div class=\"mt-6\">\n                <button\n                  class=\"bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\n                  type=\"button\"\n                >\n                  <i class=\"fab fa-twitter\"></i>\n                </button>\n                <button\n                  class=\"bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\n                  type=\"button\"\n                >\n                  <i class=\"fab fa-facebook-f\"></i>\n                </button>\n                <button\n                  class=\"bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\n                  type=\"button\"\n                >\n                  <i class=\"fab fa-dribbble\"></i>\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4\">\n          <div class=\"px-6\">\n            <img\n              alt=\"...\"\n              src=\"assets/img/mo.jpg\"\n              class=\"shadow-lg rounded-full mx-auto max-w-120-px\"\n            />\n            <div class=\"pt-6 text-center\">\n              <h5 class=\"text-xl font-bold\">Don Mooh</h5>\n              <p class=\"mt-1 text-sm text-blueGray-400 uppercase font-semibold\">\n                Marketing Specialist\n              </p>\n              <div class=\"mt-6\">\n                <button\n                  class=\"bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\n                  type=\"button\"\n                >\n                  <i class=\"fab fa-google\"></i>\n                </button>\n                <button\n                  class=\"bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\n                  type=\"button\"\n                >\n                  <i class=\"fab fa-facebook-f\"></i>\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4\">\n          <div class=\"px-6\">\n            <img\n              alt=\"...\"\n              src=\"assets/img/mo.jpg\"\n              class=\"shadow-lg rounded-full mx-auto max-w-120-px\"\n            />\n            <div class=\"pt-6 text-center\">\n              <h5 class=\"text-xl font-bold\">Mooh Thoughts</h5>\n              <p class=\"mt-1 text-sm text-blueGray-400 uppercase font-semibold\">\n                UI/UX Designer\n              </p>\n              <div class=\"mt-6\">\n                <button\n                  class=\"bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\n                  type=\"button\"\n                >\n                  <i class=\"fab fa-google\"></i>\n                </button>\n                <button\n                  class=\"bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\n                  type=\"button\"\n                >\n                  <i class=\"fab fa-twitter\"></i>\n                </button>\n                <button\n                  class=\"bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\n                  type=\"button\"\n                >\n                  <i class=\"fab fa-instagram\"></i>\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4\">\n          <div class=\"px-6\">\n            <img\n              alt=\"...\"\n              src=\"assets/img/mo.jpg\"\n              class=\"shadow-lg rounded-full mx-auto max-w-120-px\"\n            />\n            <div class=\"pt-6 text-center\">\n              <h5 class=\"text-xl font-bold\">Lord Mooh</h5>\n              <p class=\"mt-1 text-sm text-blueGray-400 uppercase font-semibold\">\n                Founder and CEO\n              </p>\n              <div class=\"mt-6\">\n                <button\n                  class=\"bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\n                  type=\"button\"\n                >\n                  <i class=\"fab fa-dribbble\"></i>\n                </button>\n                <button\n                  class=\"bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\n                  type=\"button\"\n                >\n                  <i class=\"fab fa-google\"></i>\n                </button>\n                <button\n                  class=\"bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\n                  type=\"button\"\n                >\n                  <i class=\"fab fa-twitter\"></i>\n                </button>\n                <button\n                  class=\"bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\"\n                  type=\"button\"\n                >\n                  <i class=\"fab fa-instagram\"></i>\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"pb-20 relative block bg-blueGray-800\">\n    <div\n      class=\"bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20\"\n      style=\"transform: translateZ(0)\"\n    >\n      <svg\n        class=\"absolute bottom-0 overflow-hidden\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        preserveAspectRatio=\"none\"\n        version=\"1.1\"\n        viewBox=\"0 0 2560 100\"\n        x=\"0\"\n        y=\"0\"\n      >\n        <polygon\n          class=\"text-blueGray-800 fill-current\"\n          points=\"2560 0 2560 100 0 100\"\n        ></polygon>\n      </svg>\n    </div>\n\n    <div class=\"container mx-auto px-4 lg:pt-24 lg:pb-64\">\n      <div class=\"flex flex-wrap text-center justify-center\">\n        <div class=\"w-full lg:w-6/12 px-4\">\n          <h2 class=\"text-4xl font-semibold text-white\">ALL FORMS MOOH</h2>\n          <p class=\"text-lg leading-relaxed mt-4 mb-4 text-blueGray-400\">\n            CONTACT MOOH\n          </p>\n        </div>\n      </div>\n      <div class=\"flex flex-wrap mt-12 justify-center\">\n        <div class=\"w-full lg:w-3/12 px-4 text-center\">\n          <div\n            class=\"text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center\"\n          >\n            <i class=\"fas fa-medal text-xl\"></i>\n          </div>\n          <h6 class=\"text-xl mt-5 font-semibold text-white\">\n            Good Vibes\n          </h6>\n          <p class=\"mt-2 mb-4 text-blueGray-400\">\n            Mooh Vibes\n          </p>\n        </div>\n\n        <div class=\"w-full lg:w-3/12 px-4 text-center\">\n          <div\n            class=\"text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center\"\n          >\n            <i class=\"fas fa-poll text-xl\"></i>\n          </div>\n          <h5 class=\"text-xl mt-5 font-semibold text-white\">\n            Good Food\n          </h5>\n          <p class=\"mt-2 mb-4 text-blueGray-400\">\n            Mooh Food\n          </p>\n        </div>\n        <div class=\"w-full lg:w-3/12 px-4 text-center\">\n          <div\n            class=\"text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center\"\n          >\n            <i class=\"fas fa-lightbulb text-xl\"></i>\n          </div>\n          <h5 class=\"text-xl mt-5 font-semibold text-white\">Good Laughs</h5>\n          <p class=\"mt-2 mb-4 text-blueGray-400\">\n            Mooh Laugh\n          </p>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"relative block py-24 lg:pt-0 bg-blueGray-800\">\n    <div class=\"container mx-auto px-4\">\n      <div class=\"flex flex-wrap justify-center lg:-mt-64 -mt-48\">\n        <div class=\"w-full lg:w-6/12 px-4\">\n          <div\n            class=\"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200\"\n          >\n            <div class=\"flex-auto p-5 lg:p-10\">\n              <h4 class=\"text-2xl font-semibold\">Want to contact Mooh?</h4>\n              <p class=\"leading-relaxed mt-1 mb-4 text-blueGray-500\">\n                Complete this form and we will get back to you in a year!\n              </p>\n              <div class=\"relative w-full mb-3 mt-8\">\n                <label\n                  class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\n                  htmlFor=\"full-name\"\n                >\n                  Full Name\n                </label>\n                <input\n                  type=\"text\"\n                  class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\n                  placeholder=\"Full Name\"\n                />\n              </div>\n\n              <div class=\"relative w-full mb-3\">\n                <label\n                  class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\n                  htmlFor=\"email\"\n                >\n                  Email\n                </label>\n                <input\n                  type=\"email\"\n                  class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150\"\n                  placeholder=\"Email\"\n                />\n              </div>\n\n              <div class=\"relative w-full mb-3\">\n                <label\n                  class=\"block uppercase text-blueGray-600 text-xs font-bold mb-2\"\n                  htmlFor=\"message\"\n                >\n                  Message\n                </label>\n                <textarea\n                  rows=\"4\"\n                  cols=\"80\"\n                  class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full\"\n                  placeholder=\"Type a message...\"\n                ></textarea>\n              </div>\n              <div class=\"text-center mt-6\">\n                <button\n                  class=\"bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n                  type=\"button\"\n                >\n                  Send Message\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</main>\n<app-footer></app-footer>\n");

/***/ }),

/***/ "AiJS":
/*!************************************************!*\
  !*** ./src/app/views/index/index.component.ts ***!
  \************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_index_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./index.component.html */ "W8yq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let IndexComponent = class IndexComponent {
    constructor() { }
    ngOnInit() { }
};
IndexComponent.ctorParameters = () => [];
IndexComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-index",
        template: _raw_loader_index_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], IndexComponent);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CzbP":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footers/footer/footer.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"relative bg-blueGray-200 pt-8 pb-6\">\n  <div\n    class=\"bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20\"\n    style=\"transform: translateZ(0)\"\n  >\n    <svg\n      class=\"absolute bottom-0 overflow-hidden\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n      preserveAspectRatio=\"none\"\n      version=\"1.1\"\n      viewBox=\"0 0 2560 100\"\n      x=\"0\"\n      y=\"0\"\n    >\n      <polygon\n        class=\"text-blueGray-200 fill-current\"\n        points=\"2560 0 2560 100 0 100\"\n      ></polygon>\n    </svg>\n  </div>\n\n  <div class=\"container mx-auto px-4\">\n    <div class=\"flex flex-wrap text-center lg:text-left\">\n      <div class=\"w-full lg:w-6/12 px-4\">\n        <h4 class=\"text-3xl font-semibold\">Let's keep in touch!</h4>\n        <h5 class=\"text-lg mt-0 mb-2 text-blueGray-600\">\n          Find me on any of these platforms, I'll try to respond as soon as possible.\n        </h5>\n        <div class=\"mt-6 lg:mb-0 mb-6\">\n          <button\n            class=\"bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2\"\n            type=\"button\"\n          >\n            <i class=\"fab fa-twitter\"></i>\n          </button>\n          <button\n            class=\"bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2\"\n            type=\"button\"\n          >\n            <i class=\"fab fa-facebook-square\"></i>\n          </button>\n          <button\n            class=\"bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2\"\n            type=\"button\"\n          >\n            <i class=\"fab fa-dribbble\"></i>\n          </button>\n          <button\n            class=\"bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2\"\n            type=\"button\"\n          >\n            <i class=\"fab fa-github\"></i>\n          </button>\n        </div>\n      </div>\n\n      <div class=\"w-full lg:w-6/12 px-4\">\n        <div class=\"flex flex-wrap items-top mb-6\">\n          <div class=\"w-full lg:w-4/12 px-4 ml-auto\">\n\n            <span\n              class=\"block uppercase text-blueGray-500 text-sm font-semibold mb-2\"\n            >\n              Useful Links\n            </span>\n\n            <ul class=\"list-unstyled\">\n\n              <li>\n                <a\n                  [routerLink]=\"['/profile']\"\n                  class=\"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm\"\n                >\n                  About Me\n                </a>\n              </li>\n\n              <li>\n                <a\n                  class=\"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm\"\n                >\n                  Documentation\n                </a>\n              </li>\n\n              <li>\n                <a\n                  class=\"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm\"\n                >\n                  Research\n                </a>\n              </li>\n\n              <li>\n                <a\n                  class=\"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm\"\n                >\n                  Art\n                </a>\n              </li>\n\n            </ul>\n          </div>\n\n          <div class=\"w-full lg:w-4/12 px-4\">\n            <span\n              class=\"block uppercase text-blueGray-500 text-sm font-semibold mb-2\"\n            >\n              Other Resources\n            </span>\n            <ul class=\"list-unstyled\">\n\n              <li>\n                <a\n                  class=\"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm\"\n                >\n                  Investopedia\n                </a>\n              </li>\n\n              <li>\n                <a\n                  class=\"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm\"\n                >\n                  Coinbase\n                </a>\n              </li>\n\n              <li>\n                <a\n                  class=\"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm\"\n                >\n                  Privacy Policy\n                </a>\n              </li>\n\n              <li>\n                <a\n                  class=\"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm\"\n                >\n                  Contact Us\n                </a>\n              </li>\n\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <hr class=\"my-6 border-blueGray-300\" />\n    <div class=\"flex flex-wrap items-center md:justify-between justify-center\">\n      <div class=\"w-full md:w-4/12 px-4 mx-auto text-center\">\n        <div class=\"text-sm text-blueGray-500 font-semibold py-1\">\n          Copyright © {{ date }} Mooh Life by\n          <a\n            [routerLink]=\"['/profile']\"\n            class=\"text-blueGray-500 hover:text-blueGray-800\"\n          >\n            Mooh\n          </a>\n          .\n        </div>\n      </div>\n    </div>\n  </div>\n\n</footer>\n");

/***/ }),

/***/ "DLfO":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footers/footer-small/footer-small.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer\n  class=\"pb-6\"\n  [ngClass]=\"absolute ? 'absolute w-full bottom-0 bg-blueGray-800' : 'relative'\"\n>\n  <div class=\"container mx-auto px-4\">\n    <hr class=\"mb-6 border-b-1 border-blueGray-600\" />\n    <div class=\"flex flex-wrap items-center md:justify-between justify-center\">\n      <div class=\"w-full md:w-4/12 px-4\">\n        <div\n          class=\"text-sm text-white font-semibold py-1 text-center md:text-left\"\n        >\n          Copyright © {{ date }}\n          <a\n            class=\"text-white hover:text-blueGray-300 text-sm font-semibold py-1\"\n          >\n            Mooh Life\n          </a>\n        </div>\n      </div>\n      <div class=\"w-full md:w-8/12 px-4\">\n        <ul class=\"flex flex-wrap list-none md:justify-end justify-center\">\n          <li>\n            <a\n              class=\"text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3\"\n            >\n              Mooh Life\n            </a>\n          </li>\n          <li>\n            <a\n              class=\"text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3\"\n            >\n              About Us\n            </a>\n          </li>\n          <li>\n            <a\n              class=\"text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3\"\n            >\n              Blog\n            </a>\n          </li>\n          <li>\n            <a\n              class=\"text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3\"\n            >\n              MIT License\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>\n");

/***/ }),

/***/ "EbUq":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footers/footer-admin/footer-admin.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"block py-4\">\n  <div class=\"container mx-auto px-4\">\n    <hr class=\"mb-4 border-b-1 border-blueGray-200\" />\n    <div class=\"flex flex-wrap items-center md:justify-between justify-center\">\n      <div class=\"w-full md:w-4/12 px-4\">\n        <div\n          class=\"text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left\"\n        >\n          Copyright © {{ date }}\n          <a\n            class=\"text-blueGray-500 hover:text-blueGray-700 text-sm font-semibold py-1\"\n          >\n            Mooh Life\n          </a>\n        </div>\n      </div>\n      <div class=\"w-full md:w-8/12 px-4\">\n        <ul class=\"flex flex-wrap list-none md:justify-end justify-center\">\n          <li>\n            <a\n              class=\"text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3\"\n            >\n              Mooh Life\n            </a>\n          </li>\n          <li>\n            <a\n              class=\"text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3\"\n            >\n              About Us\n            </a>\n          </li>\n          <li>\n            <a\n              class=\"text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3\"\n            >\n              Blog\n            </a>\n          </li>\n          <li>\n            <a\n              class=\"text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3\"\n            >\n              MIT License\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>\n");

/***/ }),

/***/ "H3xT":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dropdowns/user-dropdown/user-dropdown.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a\n  class=\"text-blueGray-500 block\"\n  href=\"#pablo\"\n  (click)=\"toggleDropdown($event)\"\n  #btnDropdownRef\n>\n  <div class=\"items-center flex\">\n    <span\n      class=\"w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full\"\n    >\n      <img\n        alt=\"...\"\n        class=\"w-full rounded-full align-middle border-none shadow-lg\"\n        src=\"assets/img/mo.jpg\"\n      />\n    </span>\n  </div>\n</a>\n<div class=\"min-w-48 z-50\" #popoverDropdownRef>\n  <div\n    class=\"bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 min-w-48\"\n    [ngClass]=\"dropdownPopoverShow ? 'block' : 'hidden'\"\n  >\n    <a\n      href=\"#pablo\"\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n    >\n      Action\n    </a>\n    <a\n      href=\"#pablo\"\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n    >\n      Another action\n    </a>\n    <a\n      href=\"#pablo\"\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n    >\n      Something else here\n    </a>\n    <div class=\"h-0 my-2 border border-solid border-blueGray-100\"></div>\n    <a\n      href=\"#pablo\"\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n    >\n      Seprated link\n    </a>\n  </div>\n</div>\n");

/***/ }),

/***/ "HEly":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/card-stats/card-stats.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  class=\"relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg\"\n>\n  <div class=\"flex-auto p-4\">\n    <div class=\"flex flex-wrap\">\n      <div class=\"relative w-full pr-4 max-w-full flex-grow flex-1\">\n        <h5 class=\"text-blueGray-400 uppercase font-bold text-xs\">\n          {{ statSubtitle }}\n        </h5>\n        <span class=\"font-semibold text-xl text-blueGray-700\">\n          {{ statTitle }}\n        </span>\n      </div>\n      <div class=\"relative w-auto pl-4 flex-initial\">\n        <div\n          class=\"text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full\"\n          [ngClass]=\"[statIconColor]\"\n        >\n          <i [ngClass]=\"statIconName\"></i>\n        </div>\n      </div>\n    </div>\n    <p class=\"text-sm text-blueGray-400 mt-4\">\n      <span class=\"mr-2\" [ngClass]=\"statPercentColor\">\n        <i\n          [ngClass]=\"\n            statArrow === 'up' ? 'fas fa-arrow-up' : 'fas fa-arrow-down'\n          \"\n        ></i>\n        {{ statPercent }}%\n      </span>\n      <span class=\"whitespace-nowrap\">{{ statDescripiron }}</span>\n    </p>\n  </div>\n</div>\n");

/***/ }),

/***/ "J87Q":
/*!*********************************************************************!*\
  !*** ./src/app/components/cards/card-stats/card-stats.component.ts ***!
  \*********************************************************************/
/*! exports provided: CardStatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardStatsComponent", function() { return CardStatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_stats_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-stats.component.html */ "HEly");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let CardStatsComponent = class CardStatsComponent {
    constructor() {
        this._statSubtitle = "Traffic";
        this._statTitle = "350,897";
        this._statArrow = "up";
        this._statPercent = "3.48";
        this._statPercentColor = "text-emerald-500";
        this._statDescripiron = "Since last month";
        this._statIconName = "far fa-chart-bar";
        this._statIconColor = "bg-red-500";
    }
    get statSubtitle() {
        return this._statSubtitle;
    }
    set statSubtitle(statSubtitle) {
        this._statSubtitle = statSubtitle === undefined ? "Traffic" : statSubtitle;
    }
    get statTitle() {
        return this._statTitle;
    }
    set statTitle(statTitle) {
        this._statTitle = statTitle === undefined ? "350,897" : statTitle;
    }
    // The value must match one of up or down
    get statArrow() {
        return this._statArrow;
    }
    set statArrow(statArrow) {
        this._statArrow =
            statArrow !== "down" && statArrow !== "up" ? "up" : statArrow;
    }
    get statPercent() {
        return this._statPercent;
    }
    set statPercent(statPercent) {
        this._statPercent = statPercent === undefined ? "3.48" : statPercent;
    }
    // can be any of the text color utilities
    // from tailwindcss
    get statPercentColor() {
        return this._statPercentColor;
    }
    set statPercentColor(statPercentColor) {
        this._statPercentColor =
            statPercentColor === undefined ? "text-emerald-500" : statPercentColor;
    }
    get statDescripiron() {
        return this._statDescripiron;
    }
    set statDescripiron(statDescripiron) {
        this._statDescripiron =
            statDescripiron === undefined ? "Since last month" : statDescripiron;
    }
    get statIconName() {
        return this._statIconName;
    }
    set statIconName(statIconName) {
        this._statIconName =
            statIconName === undefined ? "far fa-chart-bar" : statIconName;
    }
    // can be any of the background color utilities
    // from tailwindcss
    get statIconColor() {
        return this._statIconColor;
    }
    set statIconColor(statIconColor) {
        this._statIconColor =
            statIconColor === undefined ? "bg-red-500" : statIconColor;
    }
    ngOnInit() { }
};
CardStatsComponent.ctorParameters = () => [];
CardStatsComponent.propDecorators = {
    statSubtitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    statTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    statArrow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    statPercent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    statPercentColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    statDescripiron: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    statIconName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    statIconColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
CardStatsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-card-stats",
        template: _raw_loader_card_stats_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], CardStatsComponent);



/***/ }),

/***/ "J8Ne":
/*!*********************************************************************************!*\
  !*** ./src/app/components/dropdowns/index-dropdown/index-dropdown.component.ts ***!
  \*********************************************************************************/
/*! exports provided: IndexDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexDropdownComponent", function() { return IndexDropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_index_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./index-dropdown.component.html */ "e8es");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @popperjs/core */ "EjV/");




let IndexDropdownComponent = class IndexDropdownComponent {
    constructor() {
        this.dropdownPopoverShow = false;
    }
    ngOnInit() { }
    toggleDropdown(event) {
        event.preventDefault();
        if (this.dropdownPopoverShow) {
            this.dropdownPopoverShow = false;
        }
        else {
            this.dropdownPopoverShow = true;
            this.createPoppper();
        }
    }
    createPoppper() {
        Object(_popperjs_core__WEBPACK_IMPORTED_MODULE_3__["createPopper"])(this.btnDropdownRef.nativeElement, this.popoverDropdownRef.nativeElement, {
            placement: 'bottom-start',
        });
    }
};
IndexDropdownComponent.propDecorators = {
    btnDropdownRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['btnDropdownRef', { static: false },] }],
    popoverDropdownRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['popoverDropdownRef', { static: false },] }]
};
IndexDropdownComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-index-dropdown',
        template: _raw_loader_index_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], IndexDropdownComponent);



/***/ }),

/***/ "KKA+":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\n  class=\"md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6\"\n>\n  <div\n    class=\"md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto\"\n  >\n    <!-- Toggler -->\n    <button\n      class=\"cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent\"\n      type=\"button\"\n      (click)=\"toggleCollapseShow('bg-white m-2 py-3 px-6')\"\n    >\n      <i class=\"fas fa-bars\"></i>\n    </button>\n    <!-- Brand -->\n    <a\n      [routerLink]=\"['/']\"\n      class=\"md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0\"\n    >\n      <span class=\"block sm:hidden\"> Tailwind Angular </span>\n      <span class=\"hidden sm:block\"> Mooh Life </span>\n    </a>\n    <!-- User -->\n    <ul class=\"md:hidden items-center flex flex-wrap list-none\">\n      <li class=\"inline-block relative\">\n        <app-notification-dropdown class=\"block\"></app-notification-dropdown>\n      </li>\n      <li class=\"inline-block relative\">\n        <app-user-dropdown class=\"block\"></app-user-dropdown>\n      </li>\n    </ul>\n    <!-- Collapse -->\n    <div\n      class=\"md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded\"\n      [ngClass]=\"collapseShow\"\n    >\n      <!-- Collapse header -->\n      <div\n        class=\"md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200\"\n      >\n        <div class=\"flex flex-wrap\">\n          <div class=\"w-6/12\">\n            <a\n              [routerLink]=\"['/']\"\n              class=\"md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0\"\n            >\n              Notus Angular\n            </a>\n          </div>\n          <div class=\"w-6/12 flex justify-end\">\n            <button\n              type=\"button\"\n              class=\"cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent\"\n              (click)=\"toggleCollapseShow('hidden')\"\n            >\n              <i class=\"fas fa-times\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n      <!-- Form -->\n      <form class=\"mt-6 mb-4 md:hidden\">\n        <div class=\"mb-3 pt-0\">\n          <input\n            type=\"text\"\n            placeholder=\"Search\"\n            class=\"border-0 px-3 py-2 h-12 border border-solid border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal\"\n          />\n        </div>\n      </form>\n\n      <!-- Divider -->\n      <hr class=\"my-4 md:min-w-full\" />\n      <!-- Heading -->\n      <h6\n        class=\"md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline\"\n      >\n        Admin Layout Pages\n      </h6>\n      <!-- Navigation -->\n\n      <ul class=\"md:flex-col md:min-w-full flex flex-col list-none\">\n        <li class=\"items-center\">\n          <a\n            [routerLink]=\"['/admin/dashboard']\"\n            class=\"text-xs uppercase py-3 font-bold block\"\n            routerLinkActive\n            #adminDashboard=\"routerLinkActive\"\n            [ngClass]=\"\n              adminDashboard.isActive\n                ? 'text-red-600 hover:text-red-700'\n                : 'text-blueGray-700 hover:text-blueGray-500'\n            \"\n          >\n            <i\n              class=\"fas fa-tv mr-2 text-sm\"\n              [ngClass]=\"\n                adminDashboard.isActive ? 'opacity-75' : 'text-blueGray-300'\n              \"\n            ></i>\n            Dashboard\n          </a>\n        </li>\n\n      </ul>\n\n      <!-- Divider -->\n      <hr class=\"my-4 md:min-w-full\" />\n      <!-- Heading -->\n      <h6\n        class=\"md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline\"\n      >\n        No Layout Pages\n      </h6>\n      <!-- Navigation -->\n\n      <ul class=\"md:flex-col md:min-w-full flex flex-col list-none md:mb-4\">\n        <li class=\"items-center\">\n          <a\n            [routerLink]=\"['/landing']\"\n            class=\"text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block\"\n          >\n            <i class=\"fas fa-newspaper text-blueGray-300 mr-2 text-sm\"></i>\n            Landing Page\n          </a>\n        </li>\n\n        <li class=\"items-center\">\n          <a\n            [routerLink]=\"['/profile']\"\n            class=\"text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block\"\n          >\n            <i class=\"fas fa-user-circle text-blueGray-300 mr-2 text-sm\"></i>\n            Profile Page\n          </a>\n        </li>\n      </ul>\n\n      <!-- Divider -->\n      <hr class=\"my-4 md:min-w-full\" />\n      <!-- Heading -->\n      <h6\n        class=\"md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline\"\n      >\n        Documentation\n      </h6>\n      <!-- Navigation -->\n      <ul class=\"md:flex-col md:min-w-full flex flex-col list-none md:mb-4\">\n        <li class=\"inline-flex\">\n          <a\n            target=\"_blank\"\n            class=\"text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold\"\n          >\n            <i class=\"fas fa-paint-brush mr-2 text-blueGray-300 text-base\"></i>\n            Black Scholes Model\n          </a>\n        </li>\n\n        <li class=\"inline-flex\">\n          <a\n            target=\"_blank\"\n            class=\"text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold\"\n          >\n            <i class=\"fab fa-css3-alt mr-2 text-blueGray-300 text-base\"></i>\n            Heston Stochastic Volatility Model\n          </a>\n        </li>\n\n        <li class=\"inline-flex\">\n          <a\n            target=\"_blank\"\n            class=\"text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold\"\n          >\n            <i class=\"fab fa-angular mr-2 text-blueGray-300 text-base\"></i>\n            Interest rate Model\n          </a>\n        </li>\n\n        <li class=\"inline-flex\">\n          <a\n            target=\"_blank\"\n            class=\"text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold\"\n          >\n            <i class=\"fab fa-js-square mr-2 text-blueGray-300 text-base\"></i>\n            Binomial Model\n          </a>\n        </li>\n\n        <li class=\"inline-flex\">\n          <a\n            target=\"_blank\"\n            class=\"text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold\"\n          >\n            <i class=\"fab fa-react mr-2 text-blueGray-300 text-base\"></i>\n            Volatility Surface\n          </a>\n        </li>\n\n        <li class=\"inline-flex\">\n          <a\n            target=\"_blank\"\n            class=\"text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold\"\n          >\n            <i class=\"fab fa-react mr-2 text-blueGray-300 text-base\"></i>\n            Credit risk\n          </a>\n        </li>\n\n        <li class=\"inline-flex\">\n          <a\n            target=\"_blank\"\n            class=\"text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold\"\n          >\n            <i class=\"fas fa-link mr-2 text-blueGray-300 text-base\"></i>\n            Stochastic Rates\n          </a>\n        </li>\n\n        <li class=\"inline-flex\">\n          <a\n            target=\"_blank\"\n            class=\"text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold\"\n          >\n            <i class=\"fab fa-vuejs mr-2 text-blueGray-300 text-base\"></i>\n            Korn-Kreer-Lenssen Model\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n");

/***/ }),

/***/ "KxJz":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/admin/dashboard/dashboard.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"flex flex-wrap\">\n  <div class=\"w-full xl:w-8/12 mb-12 xl:mb-0 px-4\">\n    <app-card-line-chart></app-card-line-chart>\n  </div>\n  <div class=\"w-full xl:w-4/12 px-4\">\n    <app-card-bar-chart></app-card-bar-chart>\n  </div>\n</div>\n<div class=\"flex flex-wrap mt-4\">\n  <div class=\"w-full xl:w-8/12 mb-12 xl:mb-0 px-4\">\n    <app-card-page-visits></app-card-page-visits>\n  </div>\n  <div class=\"w-full xl:w-4/12 px-4\">\n    <app-card-social-traffic></app-card-social-traffic>\n  </div>\n</div>\n");

/***/ }),

/***/ "L/HX":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/card-page-visits/card-page-visits.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\"\n>\n  <div class=\"rounded-t mb-0 px-4 py-3 border-0\">\n    <div class=\"flex flex-wrap items-center\">\n      <div class=\"relative w-full px-4 max-w-full flex-grow flex-1\">\n        <h3 class=\"font-semibold text-base text-blueGray-700\">Page visits</h3>\n      </div>\n      <div class=\"relative w-full px-4 max-w-full flex-grow flex-1 text-right\">\n        <button\n          class=\"bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n          type=\"button\"\n        >\n          See all\n        </button>\n      </div>\n    </div>\n  </div>\n  <div class=\"block w-full overflow-x-auto\">\n    <!-- Projects table -->\n    <table class=\"items-center w-full bg-transparent border-collapse\">\n      <thead>\n        <tr>\n          <th\n            class=\"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\n          >\n            Page name\n          </th>\n          <th\n            class=\"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\n          >\n            Visitors\n          </th>\n          <th\n            class=\"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\n          >\n            Unique users\n          </th>\n          <th\n            class=\"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\n          >\n            Bounce rate\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left\"\n          >\n            /argon/\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            4,569\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            340\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <i class=\"fas fa-arrow-up text-emerald-500 mr-4\"></i>\n            46,53%\n          </td>\n        </tr>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left\"\n          >\n            /argon/index.html\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            3,985\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            319\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <i class=\"fas fa-arrow-down text-orange-500 mr-4\"></i>\n            46,53%\n          </td>\n        </tr>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left\"\n          >\n            /argon/charts.html\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            3,513\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            294\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <i class=\"fas fa-arrow-down text-orange-500 mr-4\"></i>\n            36,49%\n          </td>\n        </tr>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left\"\n          >\n            /argon/tables.html\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            2,050\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            147\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <i class=\"fas fa-arrow-up text-emerald-500 mr-4\"></i>\n            50,87%\n          </td>\n        </tr>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left\"\n          >\n            /argon/profile.html\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            1,795\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            190\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <i class=\"fas fa-arrow-down text-red-500 mr-4\"></i>\n            46,53%\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n");

/***/ }),

/***/ "Pibi":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbars/admin-navbar/admin-navbar.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Navbar -->\n<nav\n  class=\"absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4\"\n>\n  <div\n    class=\"w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4\"\n  >\n    <!-- Brand -->\n    <a\n      class=\"text-white text-sm uppercase hidden lg:inline-block font-semibold\"\n      href=\"#pablo\"\n      >Dashboard</a\n    >\n    <!-- Form -->\n    <form\n      class=\"md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3\"\n    >\n      <div class=\"relative flex w-full flex-wrap items-stretch\">\n        <span\n          class=\"z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3\"\n          ><i class=\"fas fa-search\"></i\n        ></span>\n        <input\n          type=\"text\"\n          placeholder=\"Search here...\"\n          class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10\"\n        />\n      </div>\n    </form>\n    <!-- User -->\n    <ul class=\"flex-col md:flex-row list-none items-center hidden md:flex\">\n      <app-user-dropdown class=\"block\"></app-user-dropdown>\n    </ul>\n  </div>\n</nav>\n");

/***/ }),

/***/ "R+tk":
/*!**************************************************!*\
  !*** ./src/app/layouts/admin/admin.component.ts ***!
  \**************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin.component.html */ "/ztn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let AdminComponent = class AdminComponent {
    constructor() { }
    ngOnInit() { }
};
AdminComponent.ctorParameters = () => [];
AdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-admin',
        template: _raw_loader_admin_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], AdminComponent);



/***/ }),

/***/ "RLAj":
/*!***************************************************************************!*\
  !*** ./src/app/components/headers/header-stats/header-stats.component.ts ***!
  \***************************************************************************/
/*! exports provided: HeaderStatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderStatsComponent", function() { return HeaderStatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_stats_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header-stats.component.html */ "UhXh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let HeaderStatsComponent = class HeaderStatsComponent {
    constructor() { }
    ngOnInit() { }
};
HeaderStatsComponent.ctorParameters = () => [];
HeaderStatsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-header-stats',
        template: _raw_loader_header_stats_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], HeaderStatsComponent);



/***/ }),

/***/ "RMzx":
/*!****************************************************!*\
  !*** ./src/app/views/landing/landing.component.ts ***!
  \****************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_landing_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./landing.component.html */ "AN84");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let LandingComponent = class LandingComponent {
    constructor() { }
    ngOnInit() { }
};
LandingComponent.ctorParameters = () => [];
LandingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-landing",
        template: _raw_loader_landing_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], LandingComponent);



/***/ }),

/***/ "RORk":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbars/index-navbar/index-navbar.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\n  class=\"top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow\"\n>\n  <div\n    class=\"container px-4 mx-auto flex flex-wrap items-center justify-between\"\n  >\n    <div\n      class=\"w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start\"\n    >\n      <a\n        [routerLink]=\"['/']\"\n        class=\"text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase\"\n        href=\"#pablo\"\n      >\n        Mooh Life\n      </a>\n      <button\n        class=\"cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none\"\n        type=\"button\"\n        (click)=\"setNavbarOpen()\"\n      >\n        <i class=\"fas fa-bars\"></i>\n      </button>\n    </div>\n    <div\n      class=\"lg:flex flex-grow items-center\"\n      [ngClass]=\"{ hidden: !navbarOpen, block: navbarOpen }\"\n      id=\"example-navbar-warning\"\n    >\n      <ul class=\"flex flex-col lg:flex-row list-none mr-auto\">\n        <li class=\"flex items-center\">\n          <a\n            class=\"hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold\"\n          >\n            <i\n              class=\"text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2\"\n            ></i>\n            Docs\n          </a>\n        </li>\n      </ul>\n      <ul class=\"flex flex-col lg:flex-row list-none lg:ml-auto\">\n        <li class=\"flex items-center\">\n          <app-index-dropdown class=\"block\"></app-index-dropdown>\n        </li>\n        <li class=\"flex items-center\">\n          <a\n            class=\"hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold\"\n            target=\"_blank\"\n          >\n            <i class=\"text-blueGray-400 fab fa-facebook text-lg leading-lg\"></i>\n            <span class=\"lg:hidden inline-block ml-2\">Share</span>\n          </a>\n        </li>\n\n        <li class=\"flex items-center\">\n          <a\n            class=\"hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold\"\n            target=\"_blank\"\n          >\n            <i class=\"text-blueGray-400 fab fa-twitter text-lg leading-lg\"></i>\n            <span class=\"lg:hidden inline-block ml-2\">Tweet</span>\n          </a>\n        </li>\n\n        <li class=\"flex items-center\">\n          <a\n            class=\"hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold\"\n            target=\"_blank\"\n          >\n            <i class=\"text-blueGray-400 fab fa-github text-lg leading-lg\"></i>\n            <span class=\"lg:hidden inline-block ml-2\">Star</span>\n          </a>\n        </li>\n\n        <li class=\"flex items-center\">\n          <button\n            class=\"bg-red-600 text-white active:bg-red-700 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150\"\n            type=\"button\"\n          >\n            <i class=\"fas fa-arrow-alt-circle-down\"></i> Download\n          </button>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n");

/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Skd6":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/dropdowns/notification-dropdown/notification-dropdown.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: NotificationDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationDropdownComponent", function() { return NotificationDropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_notification_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./notification-dropdown.component.html */ "XqAX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @popperjs/core */ "EjV/");




let NotificationDropdownComponent = class NotificationDropdownComponent {
    constructor() {
        this.dropdownPopoverShow = false;
    }
    ngAfterViewInit() {
        Object(_popperjs_core__WEBPACK_IMPORTED_MODULE_3__["createPopper"])(this.btnDropdownRef.nativeElement, this.popoverDropdownRef.nativeElement, {
            placement: "bottom-start",
        });
    }
    toggleDropdown(event) {
        event.preventDefault();
        if (this.dropdownPopoverShow) {
            this.dropdownPopoverShow = false;
        }
        else {
            this.dropdownPopoverShow = true;
        }
    }
};
NotificationDropdownComponent.propDecorators = {
    btnDropdownRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["btnDropdownRef", { static: false },] }],
    popoverDropdownRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["popoverDropdownRef", { static: false },] }]
};
NotificationDropdownComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-notification-dropdown",
        template: _raw_loader_notification_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], NotificationDropdownComponent);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let AppComponent = class AppComponent {
    constructor() {
        this.title = 'angular-dashboard-page';
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], AppComponent);



/***/ }),

/***/ "TmC4":
/*!*****************************************************************************!*\
  !*** ./src/app/components/cards/card-bar-chart/card-bar-chart.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CardBarChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardBarChartComponent", function() { return CardBarChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_bar_chart_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-bar-chart.component.html */ "/GnJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ "MO+k");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_3__);




let CardBarChartComponent = class CardBarChartComponent {
    constructor() { }
    ngOnInit() { }
    ngAfterViewInit() {
        let config = {
            type: "bar",
            data: {
                labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                ],
                datasets: [
                    {
                        label: new Date().getFullYear(),
                        backgroundColor: "#ed64a6",
                        borderColor: "#ed64a6",
                        data: [30, 78, 56, 34, 100, 45, 13],
                        fill: false,
                        barThickness: 8,
                    },
                    {
                        label: new Date().getFullYear() - 1,
                        fill: false,
                        backgroundColor: "#4c51bf",
                        borderColor: "#4c51bf",
                        data: [27, 68, 86, 74, 10, 4, 87],
                        barThickness: 8,
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                title: {
                    display: false,
                    text: "Orders Chart",
                },
                tooltips: {
                    mode: "index",
                    intersect: false,
                },
                hover: {
                    mode: "nearest",
                    intersect: true,
                },
                legend: {
                    labels: {
                        fontColor: "rgba(0,0,0,.4)",
                    },
                    align: "end",
                    position: "bottom",
                },
                scales: {
                    xAxes: [
                        {
                            display: false,
                            scaleLabel: {
                                display: true,
                                labelString: "Month",
                            },
                            gridLines: {
                                borderDash: [2],
                                borderDashOffset: [2],
                                color: "rgba(33, 37, 41, 0.3)",
                                zeroLineColor: "rgba(33, 37, 41, 0.3)",
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                    yAxes: [
                        {
                            display: true,
                            scaleLabel: {
                                display: false,
                                labelString: "Value",
                            },
                            gridLines: {
                                borderDash: [2],
                                drawBorder: false,
                                borderDashOffset: [2],
                                color: "rgba(33, 37, 41, 0.2)",
                                zeroLineColor: "rgba(33, 37, 41, 0.15)",
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                },
            },
        };
        let ctx = document.getElementById("bar-chart");
        ctx = ctx.getContext("2d");
        new chart_js__WEBPACK_IMPORTED_MODULE_3___default.a(ctx, config);
    }
};
CardBarChartComponent.ctorParameters = () => [];
CardBarChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-card-bar-chart",
        template: _raw_loader_card_bar_chart_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], CardBarChartComponent);



/***/ }),

/***/ "UIMn":
/*!***************************************************************************!*\
  !*** ./src/app/components/footers/footer-admin/footer-admin.component.ts ***!
  \***************************************************************************/
/*! exports provided: FooterAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterAdminComponent", function() { return FooterAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_admin_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer-admin.component.html */ "EbUq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let FooterAdminComponent = class FooterAdminComponent {
    constructor() {
        this.date = new Date().getFullYear();
    }
    ngOnInit() { }
};
FooterAdminComponent.ctorParameters = () => [];
FooterAdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-footer-admin",
        template: _raw_loader_footer_admin_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], FooterAdminComponent);



/***/ }),

/***/ "UhXh":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/headers/header-stats/header-stats.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Header -->\n<div class=\"relative bg-red-600 md:pt-32 pb-32 pt-12\">\n  <div class=\"px-4 md:px-10 mx-auto w-full\">\n    <div>\n      <!-- Card stats -->\n      <div class=\"flex flex-wrap\">\n        <div class=\"w-full lg:w-6/12 xl:w-3/12 px-4\">\n          <app-card-stats\n            statSubtitle=\"TRAFFIC\"\n            statTitle=\"350,897\"\n            statArrow=\"up\"\n            statPercent=\"3.48\"\n            statPercentColor=\"text-emerald-500\"\n            statDescripiron=\"Since last month\"\n            statIconName=\"far fa-chart-bar\"\n            statIconColor=\"bg-red-500\"\n          ></app-card-stats>\n        </div>\n        <div class=\"w-full lg:w-6/12 xl:w-3/12 px-4\">\n          <app-card-stats\n            statSubtitle=\"NEW USERS\"\n            statTitle=\"2,356\"\n            statArrow=\"down\"\n            statPercent=\"3.48\"\n            statPercentColor=\"text-red-500\"\n            statDescripiron=\"Since last week\"\n            statIconName=\"fas fa-chart-pie\"\n            statIconColor=\"bg-orange-500\"\n          ></app-card-stats>\n        </div>\n        <div class=\"w-full lg:w-6/12 xl:w-3/12 px-4\">\n          <app-card-stats\n            statSubtitle=\"SALES\"\n            statTitle=\"924\"\n            statArrow=\"down\"\n            statPercent=\"1.10\"\n            statPercentColor=\"text-orange-500\"\n            statDescripiron=\"Since yesterday\"\n            statIconName=\"fas fa-users\"\n            statIconColor=\"bg-pink-500\"\n          ></app-card-stats>\n        </div>\n        <div class=\"w-full lg:w-6/12 xl:w-3/12 px-4\">\n          <app-card-stats\n            statSubtitle=\"PERFORMANCE\"\n            statTitle=\"49,65%\"\n            statArrow=\"up\"\n            statPercent=\"12\"\n            statPercentColor=\"text-emerald-500\"\n            statDescripiron=\"Since last month\"\n            statIconName=\"fas fa-percent\"\n            statIconColor=\"bg-emerald-500\"\n          ></app-card-stats>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "Vbwu":
/*!************************************************!*\
  !*** ./src/app/layouts/auth/auth.component.ts ***!
  \************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_auth_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./auth.component.html */ "dnvD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let AuthComponent = class AuthComponent {
    constructor() { }
    ngOnInit() { }
};
AuthComponent.ctorParameters = () => [];
AuthComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-auth',
        template: _raw_loader_auth_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], AuthComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "W8yq":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/index/index.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-index-navbar></app-index-navbar>\n<section class=\"header relative pt-16 items-center flex h-screen max-h-860-px\">\n  <div class=\"container mx-auto items-center flex flex-wrap\">\n    <div class=\"w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4\">\n      <div class=\"pt-32 sm:pt-0\">\n\n        <h2 class=\"font-semibold text-4xl text-blueGray-600\">\n          Mooh Life - A Webapp to release random thoughts\n        </h2>\n\n        <p class=\"mt-4 text-lg leading-relaxed text-blueGray-500\">\n          Mooh.life is an Angular x Tailwind CSS webapp.\n          The aim is to throw random research and life events and see what sticks.\n        </p>\n\n        <div class=\"mt-12\">\n          <a\n            href=\"https://twitter.com/MoohLife\"\n            target=\"_blank\"\n            class=\"get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-red-600 active:bg-red-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150\"\n          >\n            Twitter\n          </a>\n          <a\n            href=\"https://github.com/MoRahmanWork\"\n            class=\"github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150\"\n            target=\"_blank\"\n          >\n            Github Star\n          </a>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n  <img\n    class=\"absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px\"\n    src=\"assets/img/bgIndex.jpg\"\n    alt=\"...\"\n  />\n</section>\n\n<section class=\"mt-48 md:mt-40 pb-40 relative bg-blueGray-100\">\n\n  <div\n    class=\"-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20\"\n    style=\"transform: translateZ(0)\"\n  >\n    <svg\n      class=\"absolute bottom-0 overflow-hidden\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n      preserveAspectRatio=\"none\"\n      version=\"1.1\"\n      viewBox=\"0 0 2560 100\"\n      x=\"0\"\n      y=\"0\"\n    >\n      <polygon\n        class=\"text-blueGray-100 fill-current\"\n        points=\"2560 0 2560 100 0 100\"\n      ></polygon>\n    </svg>\n  </div>\n\n  <div class=\"container mx-auto\">\n    <div class=\"flex flex-wrap items-center\">\n      <div\n        class=\"w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32\"\n      >\n        <div\n          class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-red-600\"\n        >\n\n          <img\n            alt=\"...\"\n            src=\"assets/img/bghome.jpg\"\n            class=\"w-full align-middle rounded-t-lg\"\n          />\n\n          <blockquote class=\"relative p-8 mb-4\">\n            <svg\n              preserveAspectRatio=\"none\"\n              xmlns=\"http://www.w3.org/2000/svg\"\n              viewBox=\"0 0 583 95\"\n              class=\"absolute left-0 w-full block h-95-px -top-94-px\"\n            >\n              <polygon\n                points=\"-30,95 583,95 583,65\"\n                class=\"text-red-600 fill-current\"\n              ></polygon>\n            </svg>\n            <h4 class=\"text-xl font-bold text-white\">\n              My first ever project\n            </h4>\n            <p class=\"text-md font-light mt-2 text-white\">\n              This is my first ever website project. I am still playing around with the layouts and pages.\n              Hopefully it looks nice.\n              </p>\n          </blockquote>\n\n        </div>\n      </div>\n\n      <div class=\"w-full md:w-6/12 px-4\">\n        <div class=\"flex flex-wrap\">\n          <div class=\"w-full md:w-6/12 px-4\">\n\n            <div class=\"relative flex flex-col mt-4\">\n              <div class=\"px-4 py-5 flex-auto\">\n                <div\n                  class=\"text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white\"\n                >\n                  <i class=\"fas fa-sitemap\"></i>\n                </div>\n                <h6 class=\"text-xl mb-1 font-semibold\">Art</h6>\n                <p class=\"mb-4 text-blueGray-500\">\n                  Artistic side of Mooh\n                </p>\n              </div>\n            </div>\n\n            <div class=\"relative flex flex-col min-w-0\">\n              <div class=\"px-4 py-5 flex-auto\">\n                <div\n                  class=\"text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white\"\n                >\n                  <i class=\"fas fa-drafting-compass\"></i>\n                </div>\n                <h6 class=\"text-xl mb-1 font-semibold\">\n                  Bitcoin\n                </h6>\n                <p class=\"mb-4 text-blueGray-500\">\n                  Crypto side of Mooh\n                </p>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"w-full md:w-6/12 px-4\">\n            <div class=\"relative flex flex-col min-w-0 mt-4\">\n              <div class=\"px-4 py-5 flex-auto\">\n                <div\n                  class=\"text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white\"\n                >\n                  <i class=\"fas fa-newspaper\"></i>\n                </div>\n                <h6 class=\"text-xl mb-1 font-semibold\">Lifestyle</h6>\n                <p class=\"mb-4 text-blueGray-500\">\n                  Mooh Lifestyle\n                </p>\n              </div>\n            </div>\n\n            <div class=\"relative flex flex-col min-w-0\">\n              <div class=\"px-4 py-5 flex-auto\">\n                <div\n                  class=\"text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white\"\n                >\n                  <i class=\"fas fa-file-alt\"></i>\n                </div>\n                <h6 class=\"text-xl mb-1 font-semibold\">Math</h6>\n                <p class=\"mb-4 text-blueGray-500\">\n                  Math side of Mooh\n                </p>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container mx-auto overflow-hidden pb-20\">\n    <div class=\"flex flex-wrap items-center\">\n      <div class=\"w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48\">\n        <div\n          class=\"text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white\"\n        >\n          <i class=\"fas fa-sitemap text-xl\"></i>\n        </div>\n        <h3 class=\"text-3xl mb-2 font-semibold leading-normal\">\n          Art\n        </h3>\n        <p\n          class=\"text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600\"\n        >\n          Artistic Expression\n        </p>\n        <div class=\"block pb-6\">\n          <span\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\n          >\n            Anime\n          </span>\n          <span\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\n          >\n            NFT\n          </span>\n          <span\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\n          >\n            Sad\n          </span>\n          <span\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\n          >\n            Happy\n          </span>\n          <span\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\n          >\n            History\n          </span>\n          <span\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\n          >\n            BTC\n          </span>\n        </div>\n\n        <a\n          target=\"_blank\"\n          class=\"font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150\"\n        >\n          View All\n          <i class=\"fa fa-angle-double-right ml-1 leading-relaxed\"></i>\n        </a>\n\n      </div>\n\n      <div class=\"w-full md:w-5/12 px-4 mr-auto ml-auto mt-32\">\n        <div class=\"relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0\">\n          <img\n            alt=\"...\"\n            src=\"assets/img/mo.jpg\"\n            class=\"w-full align-middle rounded absolute shadow-lg max-w-100-px left-145-px -top-29-px z-3\"\n          />\n          <img\n            alt=\"...\"\n            src=\"assets/img/bgIndex.jpg\"\n            class=\"w-full align-middle rounded-lg absolute shadow-lg max-w-210-px left-260-px -top-160-px\"\n          />\n          <img\n            alt=\"...\"\n            src=\"assets/img/bghome.jpg\"\n            class=\"w-full align-middle rounded-lg absolute shadow-lg max-w-180-px left-40-px -top-225-px z-2\"\n          />\n          <img\n            alt=\"...\"\n            src=\"assets/img/logo.png\"\n            class=\"w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px\"\n          />\n\n          <img\n            alt=\"...\"\n            src=\"assets/img/Itachi_.jpg\"\n            class=\"w-full align-middle rounded absolute shadow-xl max-w-120-px left-195-px top-95-px\"\n          />\n        </div>\n      </div>\n    </div>\n\n    <div class=\"flex flex-wrap items-center pt-32\">\n      <div class=\"w-full md:w-6/12 px-4 mr-auto ml-auto mt-32\">\n        <div class=\"justify-center flex flex-wrap relative\">\n          <div class=\"my-4 w-full lg:w-6/12 px-4\">\n\n            <a\n              target=\"_blank\"\n            >\n              <div class=\"bg-red-600 shadow-lg rounded-lg text-center p-8\">\n                <img\n                  alt=\"...\"\n                  class=\"shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white\"\n                  src=\"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg\"\n                />\n                <p class=\"text-lg text-white mt-4 font-semibold\">Black Scholes Model</p>\n              </div>\n            </a>\n\n            <a\n              target=\"_blank\"\n            >\n              <div\n                class=\"bg-lightBlue-500 shadow-lg rounded-lg text-center p-8 mt-8\"\n              >\n                <img\n                  alt=\"...\"\n                  class=\"shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white\"\n                  src=\"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg\"\n                />\n                <p class=\"text-lg text-white mt-4 font-semibold\">Interest Rate Models</p>\n              </div>\n            </a>\n\n            <a\n              target=\"_blank\"\n            >\n              <div\n                class=\"bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8\"\n              >\n                <img\n                  alt=\"...\"\n                  class=\"shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white\"\n                  src=\"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg\"\n                />\n                <p class=\"text-lg text-white mt-4 font-semibold\">Volatility Surface</p>\n              </div>\n            </a>\n\n          </div>\n\n          <div class=\"my-4 w-full lg:w-6/12 px-4 lg:mt-16\">\n\n            <a\n              target=\"_blank\"\n            >\n              <div class=\"bg-yellow-500 shadow-lg rounded-lg text-center p-8\">\n                <img\n                  alt=\"...\"\n                  class=\"shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white\"\n                  src=\"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png\"\n                />\n                <p class=\"text-lg text-white mt-4 font-semibold\">Heston SV Model</p>\n              </div>\n            </a>\n\n            <a\n              target=\"_blank\"\n            >\n              <div class=\"bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8\">\n                <img\n                  alt=\"...\"\n                  class=\"shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white\"\n                  src=\"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg\"\n                />\n                <p class=\"text-lg text-white mt-4 font-semibold\">Binomial Model</p>\n              </div>\n            </a>\n\n            <a\n              target=\"_blank\"\n            >\n              <div\n                class=\"bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8\"\n              >\n                <img\n                  alt=\"...\"\n                  class=\"shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white\"\n                  src=\"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg\"\n                />\n                <p class=\"text-lg text-white mt-4 font-semibold\">Korn-Kreer-Lenssen Model</p>\n              </div>\n            </a>\n\n          </div>\n        </div>\n      </div>\n\n      <div class=\"w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48\">\n        <div\n          class=\"text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white\"\n        >\n          <i class=\"fas fa-drafting-compass text-xl\"></i>\n        </div>\n        <h3 class=\"text-3xl mb-2 font-semibold leading-normal\">\n          Bitcoin\n        </h3>\n        <p\n          class=\"text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600\"\n        >\n          Option pricing Bitcoin using random Models.\n        </p>\n        <p\n          class=\"text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600\"\n        >\n          Applying Financial Engineering techniques from commodities to Bitcoin/Crypto Currencies\n        </p>\n        <div class=\"block pb-6\">\n          <span\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\n          >\n            BTC\n          </span>\n          <span\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\n          >\n            ETH\n          </span>\n          <span\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\n          >\n            USD\n          </span>\n          <span\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\n          >\n            GBP\n          </span>\n          <span\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\n          >\n            models\n          </span>\n          <span\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\n          >\n            Finance\n          </span>\n          <span\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\n          >\n            Engineering\n          </span>\n          <span\n            class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2\"\n          >\n            Maths\n          </span>\n        </div>\n        <a\n          target=\"_blank\"\n          class=\"font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150\"\n        >\n          View all\n          <i class=\"fa fa-angle-double-right ml-1 leading-relaxed\"></i>\n        </a>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container mx-auto px-4 pb-32 pt-48\">\n    <div class=\"items-center flex flex-wrap\">\n      <div class=\"w-full md:w-5/12 ml-auto px-12 md:px-4\">\n        <div class=\"md:pr-12\">\n          <div\n            class=\"text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white\"\n          >\n            <i class=\"fas fa-file-alt text-xl\"></i>\n          </div>\n          <h3 class=\"text-3xl font-semibold\">Math</h3>\n          <p class=\"mt-4 text-lg leading-relaxed text-blueGray-500\">\n            I read a lot of Math papers. It would be nice to share information on them.\n          </p>\n\n          <ul class=\"list-none mt-6\">\n            <li class=\"py-2\">\n              <div class=\"flex items-center\">\n                <div>\n                  <span\n                    class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3\"\n                  >\n                    <i class=\"fas fa-fingerprint\"></i>\n                  </span>\n                </div>\n                <div>\n                  <h4 class=\"text-blueGray-500\">\n                    Physics\n                  </h4>\n                </div>\n              </div>\n            </li>\n            <li class=\"py-2\">\n              <div class=\"flex items-center\">\n                <div>\n                  <span\n                    class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3\"\n                  >\n                    <i class=\"fab fa-html5\"></i>\n                  </span>\n                </div>\n                <div>\n                  <h4 class=\"text-blueGray-500\">\n                    Finance\n                  </h4>\n                </div>\n              </div>\n            </li>\n            <li class=\"py-2\">\n              <div class=\"flex items-center\">\n                <div>\n                  <span\n                    class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3\"\n                  >\n                    <i class=\"far fa-paper-plane\"></i>\n                  </span>\n                </div>\n                <div>\n                  <h4 class=\"text-blueGray-500\">\n                    Engineering\n                  </h4>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n\n      <div class=\"w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0\">\n        <img\n          alt=\"...\"\n          class=\"max-w-full rounded-lg shadow-xl\"\n          style=\"\n            transform: scale(1) perspective(1040px) rotateY(-11deg)\n              rotateX(2deg) rotate(2deg);\n          \"\n          src=\"assets/img/logo.png\"\n        />\n      </div>\n    </div>\n  </div>\n\n  <div class=\"justify-center text-center flex flex-wrap mt-24\">\n    <div class=\"w-full md:w-6/12 px-12 md:px-4\">\n      <h2 class=\"font-semibold text-4xl\">Go To Pages</h2>\n      <p class=\"text-lg leading-relaxed mt-4 mb-4 text-blueGray-500\">\n        have a look at these pages\n      </p>\n    </div>\n  </div>\n</section>\n\n<section class=\"block relative z-1 bg-blueGray-600\">\n  <div class=\"container mx-auto\">\n    <div class=\"justify-center flex flex-wrap\">\n      <div class=\"w-full lg:w-12/12 px-4 -mt-24\">\n        <div class=\"flex flex-wrap\">\n          <div class=\"w-full lg:w-4/12 px-4\">\n            <h5 class=\"text-xl font-semibold pb-4 text-center\">Dashboard</h5>\n            <a [routerLink]=\"['/auth/login']\">\n              <div\n                class=\"hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150\"\n              >\n                <img\n                  alt=\"...\"\n                  class=\"align-middle border-none max-w-full h-auto rounded-lg\"\n                  src=\"assets/img/login.jpg\"\n                />\n              </div>\n            </a>\n          </div>\n\n          <div class=\"w-full lg:w-4/12 px-4\">\n            <h5 class=\"text-xl font-semibold pb-4 text-center\">Profile Page</h5>\n            <a [routerLink]=\"['/profile']\">\n              <div\n                class=\"hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150\"\n              >\n                <img\n                  alt=\"...\"\n                  class=\"align-middle border-none max-w-full h-auto rounded-lg\"\n                  src=\"assets/img/profile.jpg\"\n                />\n              </div>\n            </a>\n          </div>\n\n          <div class=\"w-full lg:w-4/12 px-4\">\n            <h5 class=\"text-xl font-semibold pb-4 text-center\">Landing Page</h5>\n            <a [routerLink]=\"['/landing']\">\n              <div\n                class=\"hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150\"\n              >\n                <img\n                  alt=\"...\"\n                  class=\"align-middle border-none max-w-full h-auto rounded-lg\"\n                  src=\"assets/img/landing.jpg\"\n                />\n              </div>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"py-20 bg-blueGray-600 overflow-hidden\">\n  <div class=\"container mx-auto pb-64\">\n    <div class=\"flex flex-wrap justify-center\">\n      <div class=\"w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64\">\n        <div\n          class=\"text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white\"\n        >\n          <i class=\"fas fa-code-branch text-xl\"></i>\n        </div>\n        <h3 class=\"text-3xl mb-2 font-semibold leading-normal text-white\">\n          Github\n        </h3>\n        <p\n          class=\"text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400\"\n        >\n          Any and all coding can be found on my github\n        </p>\n        <p\n          class=\"text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-400\"\n        >\n          Take a look\n        </p>\n        <a\n          target=\"_blank\"\n          class=\"github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150\"\n        >\n          Github Star\n        </a>\n      </div>\n\n      <div class=\"w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative\">\n        <i\n          class=\"fab fa-github text-blueGray-700 text-55 absolute -top-150-px -right-100 left-auto opacity-80\"\n        ></i>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"pb-16 bg-blueGray-200 relative pt-32\">\n  <div\n    class=\"-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20\"\n    style=\"transform: translateZ(0)\"\n  >\n    <svg\n      class=\"absolute bottom-0 overflow-hidden\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n      preserveAspectRatio=\"none\"\n      version=\"1.1\"\n      viewBox=\"0 0 2560 100\"\n      x=\"0\"\n      y=\"0\"\n    >\n      <polygon\n        class=\"text-blueGray-200 fill-current\"\n        points=\"2560 0 2560 100 0 100\"\n      ></polygon>\n    </svg>\n  </div>\n\n  <div class=\"container mx-auto\">\n    <div\n      class=\"flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10\"\n    >\n      <div class=\"w-full text-center lg:w-8/12\">\n        <p class=\"text-4xl text-center\">\n          <span role=\"img\" aria-label=\"love\"> 😍 </span>\n        </p>\n        <h3 class=\"font-semibold text-3xl\">Hope you enjoyed this</h3>\n        <p class=\"text-blueGray-500 text-lg leading-relaxed mt-4 mb-4\">\n          Feel free to like, share, subscribe!\n        </p>\n        <div class=\"sm:block flex flex-col mt-10\">\n          <a\n            target=\"_blank\"\n            class=\"get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-red-600 active:bg-red-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150\"\n          >\n            Get started\n          </a>\n          <a\n            target=\"_blank\"\n            class=\"github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150\"\n          >\n            <i class=\"fab fa-github text-lg mr-1\"></i>\n            <span>Help With a Star</span>\n          </a>\n        </div>\n        <div class=\"text-center mt-16\"></div>\n      </div>\n    </div>\n  </div>\n\n</section>\n<app-footer></app-footer>\n");

/***/ }),

/***/ "Xodl":
/*!***************************************************************************!*\
  !*** ./src/app/components/navbars/admin-navbar/admin-navbar.component.ts ***!
  \***************************************************************************/
/*! exports provided: AdminNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminNavbarComponent", function() { return AdminNavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin-navbar.component.html */ "Pibi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let AdminNavbarComponent = class AdminNavbarComponent {
    constructor() { }
    ngOnInit() { }
};
AdminNavbarComponent.ctorParameters = () => [];
AdminNavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-admin-navbar",
        template: _raw_loader_admin_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], AdminNavbarComponent);



/***/ }),

/***/ "XqAX":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dropdowns/notification-dropdown/notification-dropdown.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a\n  class=\"text-blueGray-500 block py-1 px-3\"\n  href=\"#pablo\"\n  (click)=\"toggleDropdown($event)\"\n  #btnDropdownRef\n>\n  <i class=\"fas fa-bell\"></i>\n</a>\n<div class=\"min-w-48 z-50\" #popoverDropdownRef>\n  <div\n    class=\"bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 min-w-48\"\n    [ngClass]=\"dropdownPopoverShow ? 'block' : 'hidden'\"\n  >\n    <a\n      href=\"#pablo\"\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n    >\n      Action\n    </a>\n    <a\n      href=\"#pablo\"\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n    >\n      Another action\n    </a>\n    <a\n      href=\"#pablo\"\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n    >\n      Something else here\n    </a>\n    <div class=\"h-0 my-2 border border-solid border-blueGray-100\"></div>\n    <a\n      href=\"#pablo\"\n      class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n    >\n      Seprated link\n    </a>\n  </div>\n</div>\n");

/***/ }),

/***/ "YpXG":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/card-social-traffic/card-social-traffic.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded\"\n>\n  <div class=\"rounded-t mb-0 px-4 py-3 border-0\">\n    <div class=\"flex flex-wrap items-center\">\n      <div class=\"relative w-full px-4 max-w-full flex-grow flex-1\">\n        <h3 class=\"font-semibold text-base text-blueGray-700\">\n          Social traffic\n        </h3>\n      </div>\n      <div class=\"relative w-full px-4 max-w-full flex-grow flex-1 text-right\">\n        <button\n          class=\"bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\"\n          type=\"button\"\n        >\n          See all\n        </button>\n      </div>\n    </div>\n  </div>\n  <div class=\"block w-full overflow-x-auto\">\n    <!-- Projects table -->\n    <table class=\"items-center w-full bg-transparent border-collapse\">\n      <thead class=\"thead-light\">\n        <tr>\n          <th\n            class=\"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\n          >\n            Referral\n          </th>\n          <th\n            class=\"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left\"\n          >\n            Visitors\n          </th>\n          <th\n            class=\"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px\"\n          ></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left\"\n          >\n            Facebook\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            1,480\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <div class=\"flex items-center\">\n              <span class=\"mr-2\">60%</span>\n              <div class=\"relative w-full\">\n                <div\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-red-200\"\n                >\n                  <div\n                    style=\"width: 60%\"\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500\"\n                  ></div>\n                </div>\n              </div>\n            </div>\n          </td>\n        </tr>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left\"\n          >\n            Facebook\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            5,480\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <div class=\"flex items-center\">\n              <span class=\"mr-2\">70%</span>\n              <div class=\"relative w-full\">\n                <div\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-emerald-200\"\n                >\n                  <div\n                    style=\"width: 70%\"\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500\"\n                  ></div>\n                </div>\n              </div>\n            </div>\n          </td>\n        </tr>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left\"\n          >\n            Google\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            4,807\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <div class=\"flex items-center\">\n              <span class=\"mr-2\">80%</span>\n              <div class=\"relative w-full\">\n                <div\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-purple-200\"\n                >\n                  <div\n                    style=\"width: 80%\"\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500\"\n                  ></div>\n                </div>\n              </div>\n            </div>\n          </td>\n        </tr>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left\"\n          >\n            Instagram\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            3,678\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <div class=\"flex items-center\">\n              <span class=\"mr-2\">75%</span>\n              <div class=\"relative w-full\">\n                <div\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-lightBlue-200\"\n                >\n                  <div\n                    style=\"width: 75%\"\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-lightBlue-500\"\n                  ></div>\n                </div>\n              </div>\n            </div>\n          </td>\n        </tr>\n        <tr>\n          <th\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left\"\n          >\n            twitter\n          </th>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            2,645\n          </td>\n          <td\n            class=\"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4\"\n          >\n            <div class=\"flex items-center\">\n              <span class=\"mr-2\">30%</span>\n              <div class=\"relative w-full\">\n                <div\n                  class=\"overflow-hidden h-2 text-xs flex rounded bg-orange-200\"\n                >\n                  <div\n                    style=\"width: 30%\"\n                    class=\"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500\"\n                  ></div>\n                </div>\n              </div>\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _layouts_admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/admin/admin.component */ "R+tk");
/* harmony import */ var _layouts_auth_auth_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/auth/auth.component */ "Vbwu");
/* harmony import */ var _views_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/admin/dashboard/dashboard.component */ "zmeh");
/* harmony import */ var _views_index_index_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/index/index.component */ "AiJS");
/* harmony import */ var _views_landing_landing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/landing/landing.component */ "RMzx");
/* harmony import */ var _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/profile/profile.component */ "wF9P");
/* harmony import */ var _components_navbars_admin_navbar_admin_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/navbars/admin-navbar/admin-navbar.component */ "Xodl");
/* harmony import */ var _components_navbars_auth_navbar_auth_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/navbars/auth-navbar/auth-navbar.component */ "zslb");
/* harmony import */ var _components_cards_card_bar_chart_card_bar_chart_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/cards/card-bar-chart/card-bar-chart.component */ "TmC4");
/* harmony import */ var _components_cards_card_line_chart_card_line_chart_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/cards/card-line-chart/card-line-chart.component */ "+Kwz");
/* harmony import */ var _components_cards_card_page_visits_card_page_visits_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/cards/card-page-visits/card-page-visits.component */ "3IhM");
/* harmony import */ var _components_cards_card_profile_card_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/cards/card-profile/card-profile.component */ "diaN");
/* harmony import */ var _components_cards_card_social_traffic_card_social_traffic_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/cards/card-social-traffic/card-social-traffic.component */ "xud4");
/* harmony import */ var _components_cards_card_stats_card_stats_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/cards/card-stats/card-stats.component */ "J87Q");
/* harmony import */ var _components_footers_footer_admin_footer_admin_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/footers/footer-admin/footer-admin.component */ "UIMn");
/* harmony import */ var _components_footers_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/footers/footer/footer.component */ "1DoU");
/* harmony import */ var _components_footers_footer_small_footer_small_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/footers/footer-small/footer-small.component */ "xlab");
/* harmony import */ var _components_headers_header_stats_header_stats_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/headers/header-stats/header-stats.component */ "RLAj");
/* harmony import */ var _components_navbars_index_navbar_index_navbar_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/navbars/index-navbar/index-navbar.component */ "4b2p");
/* harmony import */ var _components_dropdowns_index_dropdown_index_dropdown_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/dropdowns/index-dropdown/index-dropdown.component */ "J8Ne");
/* harmony import */ var _components_dropdowns_pages_dropdown_pages_dropdown_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/dropdowns/pages-dropdown/pages-dropdown.component */ "wcq5");
/* harmony import */ var _components_dropdowns_notification_dropdown_notification_dropdown_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/dropdowns/notification-dropdown/notification-dropdown.component */ "Skd6");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _components_dropdowns_user_dropdown_user_dropdown_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/dropdowns/user-dropdown/user-dropdown.component */ "0slC");





// layouts


// admin views

// no layouts view



// components for views and layouts


















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _views_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
            _components_cards_card_bar_chart_card_bar_chart_component__WEBPACK_IMPORTED_MODULE_13__["CardBarChartComponent"],
            _components_cards_card_line_chart_card_line_chart_component__WEBPACK_IMPORTED_MODULE_14__["CardLineChartComponent"],
            _components_dropdowns_index_dropdown_index_dropdown_component__WEBPACK_IMPORTED_MODULE_24__["IndexDropdownComponent"],
            _components_dropdowns_pages_dropdown_pages_dropdown_component__WEBPACK_IMPORTED_MODULE_25__["PagesDropdownComponent"],
            _components_dropdowns_notification_dropdown_notification_dropdown_component__WEBPACK_IMPORTED_MODULE_26__["NotificationDropdownComponent"],
            _components_dropdowns_user_dropdown_user_dropdown_component__WEBPACK_IMPORTED_MODULE_28__["UserDropdownComponent"],
            _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_27__["SidebarComponent"],
            _components_footers_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__["FooterComponent"],
            _components_footers_footer_small_footer_small_component__WEBPACK_IMPORTED_MODULE_21__["FooterSmallComponent"],
            _components_footers_footer_admin_footer_admin_component__WEBPACK_IMPORTED_MODULE_19__["FooterAdminComponent"],
            _components_cards_card_page_visits_card_page_visits_component__WEBPACK_IMPORTED_MODULE_15__["CardPageVisitsComponent"],
            _components_cards_card_profile_card_profile_component__WEBPACK_IMPORTED_MODULE_16__["CardProfileComponent"],
            _components_cards_card_social_traffic_card_social_traffic_component__WEBPACK_IMPORTED_MODULE_17__["CardSocialTrafficComponent"],
            _components_cards_card_stats_card_stats_component__WEBPACK_IMPORTED_MODULE_18__["CardStatsComponent"],
            _components_headers_header_stats_header_stats_component__WEBPACK_IMPORTED_MODULE_22__["HeaderStatsComponent"],
            _components_navbars_auth_navbar_auth_navbar_component__WEBPACK_IMPORTED_MODULE_12__["AuthNavbarComponent"],
            _components_navbars_admin_navbar_admin_navbar_component__WEBPACK_IMPORTED_MODULE_11__["AdminNavbarComponent"],
            _components_navbars_index_navbar_index_navbar_component__WEBPACK_IMPORTED_MODULE_23__["IndexNavbarComponent"],
            _layouts_admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"],
            _layouts_auth_auth_component__WEBPACK_IMPORTED_MODULE_6__["AuthComponent"],
            _views_index_index_component__WEBPACK_IMPORTED_MODULE_8__["IndexComponent"],
            _views_landing_landing_component__WEBPACK_IMPORTED_MODULE_9__["LandingComponent"],
            _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"]
        ],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "c9Li":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/card-profile/card-profile.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  class=\"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16\"\n>\n  <div class=\"px-6\">\n    <div class=\"flex flex-wrap justify-center\">\n      <div class=\"w-full px-4 flex justify-center\">\n        <div class=\"relative\">\n          <img\n            alt=\"...\"\n            src=\"assets/img/mo.jpg\"\n            class=\"shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px\"\n          />\n        </div>\n      </div>\n      <div class=\"w-full px-4 text-center mt-20\">\n        <div class=\"flex justify-center py-4 lg:pt-4 pt-8\">\n          <div class=\"mr-4 p-3 text-center\">\n            <span\n              class=\"text-xl font-bold block uppercase tracking-wide text-blueGray-600\"\n            >\n              22\n            </span>\n            <span class=\"text-sm text-blueGray-400\">Friends</span>\n          </div>\n          <div class=\"mr-4 p-3 text-center\">\n            <span\n              class=\"text-xl font-bold block uppercase tracking-wide text-blueGray-600\"\n            >\n              10\n            </span>\n            <span class=\"text-sm text-blueGray-400\">Photos</span>\n          </div>\n          <div class=\"lg:mr-4 p-3 text-center\">\n            <span\n              class=\"text-xl font-bold block uppercase tracking-wide text-blueGray-600\"\n            >\n              89\n            </span>\n            <span class=\"text-sm text-blueGray-400\">Comments</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"text-center mt-12\">\n      <h3\n        class=\"text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2\"\n      >\n        Mooh\n      </h3>\n      <div\n        class=\"text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase\"\n      >\n        <i class=\"fas fa-map-marker-alt mr-2 text-lg text-blueGray-400\"></i>\n        London, United Kingdom\n      </div>\n      <div class=\"mb-2 text-blueGray-600 mt-10\">\n        <i class=\"fas fa-briefcase mr-2 text-lg text-blueGray-400\"></i>\n        Quantitative Engineer - LifeStyle\n      </div>\n      <div class=\"mb-2 text-blueGray-600\">\n        <i class=\"fas fa-university mr-2 text-lg text-blueGray-400\"></i>\n        University College London\n      </div>\n    </div>\n    <div class=\"mt-10 py-10 border-t border-blueGray-200 text-center\">\n      <div class=\"flex flex-wrap justify-center\">\n        <div class=\"w-full lg:w-9/12 px-4\">\n          <p class=\"mb-4 text-lg leading-relaxed text-blueGray-700\">\n            Finest Coder from LDN\n          </p>\n          <a href=\"javascript:void(0);\" class=\"font-normal text-red-600\">\n            Show more\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "diaN":
/*!*************************************************************************!*\
  !*** ./src/app/components/cards/card-profile/card-profile.component.ts ***!
  \*************************************************************************/
/*! exports provided: CardProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardProfileComponent", function() { return CardProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-profile.component.html */ "c9Li");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let CardProfileComponent = class CardProfileComponent {
    constructor() { }
    ngOnInit() { }
};
CardProfileComponent.ctorParameters = () => [];
CardProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-card-profile',
        template: _raw_loader_card_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], CardProfileComponent);



/***/ }),

/***/ "dnvD":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth/auth.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <app-auth-navbar></app-auth-navbar>\n  <main>\n    <section class=\"relative w-full h-full py-40 min-h-screen\">\n      <div\n        class=\"absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full\"\n        style=\"background-image: url('assets/img/register_bg_2.png')\"\n      ></div>\n      <router-outlet></router-outlet>\n      <app-footer-small [absolute]=\"true\"></app-footer-small>\n    </section>\n  </main>\n</div>\n");

/***/ }),

/***/ "e8es":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dropdowns/index-dropdown/index-dropdown.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a\n  class=\"hover:text-blueGray-500 text-blueGray-700 px-3 py-2 flex items-center text-xs uppercase font-bold\"\n  href=\"#pablo\"\n  (click)=\"toggleDropdown($event)\"\n  #btnDropdownRef\n>\n  Mooh Pages\n</a>\n<div\n  class=\"bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48\"\n  [ngClass]=\"dropdownPopoverShow ? 'block' : 'hidden'\"\n  #popoverDropdownRef\n>\n  <span\n    class=\"text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400\"\n  >\n    Admin Layout\n  </span>\n  <a\n    [routerLink]=\"['/admin/dashboard']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n  >\n    Dashboard\n  </a>\n\n  <div class=\"h-0 mx-4 my-2 border border-solid border-blueGray-100\"></div>\n  <span\n    class=\"text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400\"\n  >\n    Auth Layout\n  </span>\n  <a\n    [routerLink]=\"['/auth/login']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n  >\n    Login\n  </a>\n  <a\n    [routerLink]=\"['/auth/register']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n  >\n    Register\n  </a>\n  <div class=\"h-0 mx-4 my-2 border border-solid border-blueGray-100\"></div>\n  <span\n    class=\"text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400\"\n  >\n    No Layout\n  </span>\n  <a\n    [routerLink]=\"['/landing']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n  >\n    Landing\n  </a>\n  <a\n    [routerLink]=\"['/profile']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n  >\n    Profile\n  </a>\n</div>\n");

/***/ }),

/***/ "e8ip":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbars/auth-navbar/auth-navbar.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\n  class=\"top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg\"\n>\n  <div\n    class=\"container px-4 mx-auto flex flex-wrap items-center justify-between\"\n  >\n\n    <div\n      class=\"w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start\"\n    >\n      <a\n        [routerLink]=\"['/']\"\n        class=\"text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase\"\n      >\n        mooh life\n      </a>\n\n      <button\n        class=\"cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none\"\n        type=\"button\"\n        (click)=\"setNavbarOpen()\"\n      >\n        <i class=\"text-white fas fa-bars\"></i>\n      </button>\n    </div>\n\n    <div\n      class=\"lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none\"\n      [ngClass]=\"{ hidden: !navbarOpen, 'block rounded shadow-lg': navbarOpen }\"\n      id=\"example-navbar-warning\"\n    >\n      <ul class=\"flex flex-col lg:flex-row list-none mr-auto\">\n        <li class=\"flex items-center\">\n          <a\n            class=\"lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold\"\n          >\n            <i\n              class=\"lg:text-blueGray-200 text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2\"\n            ></i>\n            Docs\n          </a>\n        </li>\n      </ul>\n\n      <ul class=\"flex flex-col lg:flex-row list-none lg:ml-auto\">\n\n        <li class=\"flex items-center\">\n          <app-pages-dropdown class=\"block\"></app-pages-dropdown>\n        </li>\n\n<!--        <li class=\"flex items-center\">-->\n<!--          <a-->\n<!--            class=\"lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold\"-->\n<!--            href=\"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-angular%2F\"-->\n<!--          >-->\n<!--            <i-->\n<!--              class=\"lg:text-blueGray-200 text-blueGray-400 fab fa-facebook text-lg leading-lg\"-->\n<!--            ></i>-->\n<!--            <span class=\"lg:hidden inline-block ml-2\">Share</span>-->\n<!--          </a>-->\n<!--        </li>-->\n\n<!--        <li class=\"flex items-center\">-->\n<!--          <a-->\n<!--            class=\"lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold\"-->\n<!--            href=\"https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-angular%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20Angular%20UI%20Kit%20and%20Admin.%20Let%20Notus%20Angular%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level.\"-->\n<!--            target=\"_blank\"-->\n<!--          >-->\n<!--            <i-->\n<!--              class=\"lg:text-blueGray-200 text-blueGray-400 fab fa-twitter text-lg leading-lg\"-->\n<!--            ></i>-->\n<!--            <span class=\"lg:hidden inline-block ml-2\">Tweet</span>-->\n<!--          </a>-->\n<!--        </li>-->\n\n<!--        <li class=\"flex items-center\">-->\n<!--          <a-->\n<!--            class=\"lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold\"-->\n<!--            href=\"https://github.com/MoRahmanWork\"-->\n<!--            target=\"_blank\"-->\n<!--          >-->\n<!--            <i-->\n<!--              class=\"lg:text-blueGray-200 text-blueGray-400 fab fa-github text-lg leading-lg\"-->\n<!--            ></i>-->\n<!--            <span class=\"lg:hidden inline-block ml-2\">Star</span>-->\n<!--          </a>-->\n<!--        </li>-->\n\n        <li class=\"flex items-center\">\n          <button\n            class=\"bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150\"\n            type=\"button\"\n          >\n            <i class=\"fas fa-arrow-alt-circle-down\"></i> Download\n          </button>\n        </li>\n\n      </ul>\n\n    </div>\n  </div>\n</nav>\n");

/***/ }),

/***/ "lLla":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cards/card-line-chart/card-line-chart.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  class=\"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700\"\n>\n\n  <div class=\"rounded-t mb-0 px-4 py-3 bg-transparent\">\n    <div class=\"flex flex-wrap items-center\">\n      <div class=\"relative w-full max-w-full flex-grow flex-1\">\n        <h6 class=\"uppercase text-blueGray-100 mb-1 text-xs font-semibold\">\n          Overview\n        </h6>\n        <h2 class=\"text-white text-xl font-semibold\">BTC Price</h2>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"p-4 flex-auto\">\n    <!-- Chart -->\n    <div class=\"relative\" style=\"height: 350px\">\n      <canvas id=\"line-chart\"></canvas>\n    </div>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "owMO":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dropdowns/pages-dropdown/pages-dropdown.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a\n  class=\"lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold\"\n  href=\"#pablo\"\n  (click)=\"toggleDropdown($event)\"\n  #btnDropdownRef\n>\n  Mooh Pages\n</a>\n\n<div\n  class=\"bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48\"\n  [ngClass]=\"dropdownPopoverShow ? 'block' : 'hidden'\"\n  #popoverDropdownRef\n>\n  <span\n    class=\"text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400\"\n  >\n    Admin Layout\n  </span>\n  <a\n    [routerLink]=\"['/admin/dashboard']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n  >\n    Dashboard\n  </a>\n  <div class=\"h-0 mx-4 my-2 border border-solid border-blueGray-100\"></div>\n  <span\n    class=\"text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400\"\n  >\n    Auth Layout\n  </span>\n  <a\n    [routerLink]=\"['/auth/login']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n  >\n    Login\n  </a>\n  <a\n    [routerLink]=\"['/auth/register']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n  >\n    Register\n  </a>\n\n  <div class=\"h-0 mx-4 my-2 border border-solid border-blueGray-100\"></div>\n  <span\n    class=\"text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400\"\n  >\n    No Layout\n  </span>\n  <a\n    [routerLink]=\"['/landing']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n  >\n    Landing\n  </a>\n  <a\n    [routerLink]=\"['/profile']\"\n    class=\"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700\"\n  >\n    Profile\n  </a>\n\n</div>\n");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layouts_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/admin/admin.component */ "R+tk");
/* harmony import */ var _views_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/admin/dashboard/dashboard.component */ "zmeh");
/* harmony import */ var _views_index_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/index/index.component */ "AiJS");
/* harmony import */ var _views_landing_landing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/landing/landing.component */ "RMzx");
/* harmony import */ var _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/profile/profile.component */ "wF9P");



// layouts

// admin views

// no layouts views



const routes = [
    // admin views
    {
        path: 'admin',
        component: _layouts_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
        children: [
            { path: 'dashboard', component: _views_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
        ],
    },
    // no layout views
    { path: 'profile', component: _views_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"] },
    { path: 'landing', component: _views_landing_landing_component__WEBPACK_IMPORTED_MODULE_6__["LandingComponent"] },
    { path: '', component: _views_index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"] },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "wF9P":
/*!****************************************************!*\
  !*** ./src/app/views/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile.component.html */ "8GP7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let ProfileComponent = class ProfileComponent {
    constructor() { }
    ngOnInit() { }
};
ProfileComponent.ctorParameters = () => [];
ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-profile",
        template: _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ProfileComponent);



/***/ }),

/***/ "wcq5":
/*!*********************************************************************************!*\
  !*** ./src/app/components/dropdowns/pages-dropdown/pages-dropdown.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PagesDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesDropdownComponent", function() { return PagesDropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pages_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pages-dropdown.component.html */ "owMO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @popperjs/core */ "EjV/");




let PagesDropdownComponent = class PagesDropdownComponent {
    constructor() {
        this.dropdownPopoverShow = false;
    }
    ngOnInit() { }
    toggleDropdown(event) {
        event.preventDefault();
        if (this.dropdownPopoverShow) {
            this.dropdownPopoverShow = false;
        }
        else {
            this.dropdownPopoverShow = true;
            this.createPoppper();
        }
    }
    createPoppper() {
        Object(_popperjs_core__WEBPACK_IMPORTED_MODULE_3__["createPopper"])(this.btnDropdownRef.nativeElement, this.popoverDropdownRef.nativeElement, {
            placement: 'bottom-start',
        });
    }
};
PagesDropdownComponent.propDecorators = {
    btnDropdownRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['btnDropdownRef', { static: false },] }],
    popoverDropdownRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['popoverDropdownRef', { static: false },] }]
};
PagesDropdownComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-pages-dropdown',
        template: _raw_loader_pages_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], PagesDropdownComponent);



/***/ }),

/***/ "xlab":
/*!***************************************************************************!*\
  !*** ./src/app/components/footers/footer-small/footer-small.component.ts ***!
  \***************************************************************************/
/*! exports provided: FooterSmallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterSmallComponent", function() { return FooterSmallComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_small_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer-small.component.html */ "DLfO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let FooterSmallComponent = class FooterSmallComponent {
    constructor() {
        this.date = new Date().getFullYear();
        this._absolute = false;
    }
    get absolute() {
        return this._absolute;
    }
    set absolute(absolute) {
        this._absolute = absolute === undefined ? false : absolute;
    }
    ngOnInit() { }
};
FooterSmallComponent.ctorParameters = () => [];
FooterSmallComponent.propDecorators = {
    absolute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
FooterSmallComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-footer-small",
        template: _raw_loader_footer_small_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], FooterSmallComponent);



/***/ }),

/***/ "xud4":
/*!***************************************************************************************!*\
  !*** ./src/app/components/cards/card-social-traffic/card-social-traffic.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CardSocialTrafficComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardSocialTrafficComponent", function() { return CardSocialTrafficComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_social_traffic_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card-social-traffic.component.html */ "YpXG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let CardSocialTrafficComponent = class CardSocialTrafficComponent {
    constructor() { }
    ngOnInit() { }
};
CardSocialTrafficComponent.ctorParameters = () => [];
CardSocialTrafficComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-card-social-traffic",
        template: _raw_loader_card_social_traffic_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], CardSocialTrafficComponent);



/***/ }),

/***/ "zBoC":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sidebar.component.html */ "KKA+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let SidebarComponent = class SidebarComponent {
    constructor() {
        this.collapseShow = 'hidden';
    }
    ngOnInit() { }
    toggleCollapseShow(classes) {
        this.collapseShow = classes;
    }
};
SidebarComponent.ctorParameters = () => [];
SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-sidebar',
        template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], SidebarComponent);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ "zmeh":
/*!**************************************************************!*\
  !*** ./src/app/views/admin/dashboard/dashboard.component.ts ***!
  \**************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dashboard.component.html */ "KxJz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() { }
};
DashboardComponent.ctorParameters = () => [];
DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-dashboard",
        template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], DashboardComponent);



/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zslb":
/*!*************************************************************************!*\
  !*** ./src/app/components/navbars/auth-navbar/auth-navbar.component.ts ***!
  \*************************************************************************/
/*! exports provided: AuthNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthNavbarComponent", function() { return AuthNavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_auth_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./auth-navbar.component.html */ "e8ip");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let AuthNavbarComponent = class AuthNavbarComponent {
    constructor() {
        this.navbarOpen = false;
    }
    ngOnInit() { }
    setNavbarOpen() {
        this.navbarOpen = !this.navbarOpen;
    }
};
AuthNavbarComponent.ctorParameters = () => [];
AuthNavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-auth-navbar',
        template: _raw_loader_auth_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], AuthNavbarComponent);



/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map