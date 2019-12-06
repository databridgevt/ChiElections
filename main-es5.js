var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!--Main Toolbar-->\n<mat-toolbar class=\"mat-elevation-z6\" id=\"title-bar\" color=\"primary\">\n    <button\n        mat-icon-button\n        color=\"secondary\"\n        aria-label=\"Menu\"\n        (click)=\"sidenav.toggle()\"\n    >\n        <!--Call sidenav.toggle to open/close the side menu-->\n        <mat-icon>menu</mat-icon>\n    </button>\n\n    <span class=\"fill-space\">\n        <!--Fill Remaining Space For Alignment Purposes-->\n    </span>\n\n    <span>Chicago Elections Project</span>\n\n    <span class=\"fill-space\">\n        <!--Fill Remaining Space for Alignment Purposes-->\n    </span>\n\n    <a mat-icon-button href=\"https://twitter.com/chielections\" target=\"_blank\">\n        <mat-icon fontSet=\"fab\" fontIcon=\"fa-twitter\"></mat-icon>\n    </a>\n\n    <!--Items rendered in  the extended Menu-->\n    <mat-menu #appMenu=\"matMenu\">\n        <button mat-menu-item (click)=\"openDialog()\">Login</button>\n        <button mat-menu-item (click)=\"logout()\">Logout</button>\n    </mat-menu>\n\n    <!--Icon Button that represents a Right-Aligned Menu-->\n    <button\n        mat-icon-button\n        color=\"secondary\"\n        aria-label=\"Login\"\n        [matMenuTriggerFor]=\"appMenu\"\n    >\n        <mat-icon>person</mat-icon>\n    </button>\n</mat-toolbar>\n\n<!--The rest of the webpage needs to be rendered inside of the sidenav,\n    so the pretty animation can affect all relevant parts of the \n    webpage-->\n<mat-sidenav-container\n    hasBackdrop=\"false\"\n    id=\"container\"\n    fullscreen\n    class=\"mat-typography sidenav-container\"\n>\n    <!--Two way bind the opened boolean to programmatically open side menu-->\n    <mat-sidenav\n        class=\"mat-elevation-z2\"\n        #sidenav\n        mode=\"side\"\n        [(opened)]=\"opened\"\n    >\n        <!--Links to Locations in app should go here-->\n\n        <!-- Vertical Tabs Idea \n    <nav mat-tab-nav-bar color=\"accent\">\n      <a mat-tab-link href=\".\">First Link</a>\n      <a mat-tab-link href=\".\">Second Link</a>\n    </nav> \n    -->\n        <div (click)=\"sidenav.close()\">\n            <a mat-button id=\"sidenav-button\" routerLink=\"\">\n                HOME\n            </a>\n            <br />\n            <a mat-button id=\"sidenav-button\" routerLink=\"cities\">\n                CITIES\n            </a>\n            <br />\n            <a mat-button id=\"sidenav-button\" routerLink=\"candidates\">\n                CANDIDATES\n            </a>\n            <br />\n            <a mat-button id=\"sidenav-button\" routerLink=\"graphs\">\n                GRAPH\n            </a>\n        </div>\n    </mat-sidenav>\n    <!--Implicit Main Content-->\n\n    <!--Routes get generated as Siblings to router-outlet-->\n    <router-outlet></router-outlet>\n</mat-sidenav-container>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/candidates/candidates.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/candidates/candidates.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar style=\"height: 90px\" color=\"secondary\" class=\"mat-elevation-z4\">\n    <form>\n        <mat-form-field>\n            <!-- TODO\n            Inline this search icon w/ placeholder text \n            <span matPrefix><mat-icon>search</mat-icon>&nbsp;</span>\n            <mat-icon mdPrefix>search</mat-icon>\n            -->\n            <input matInput placeholder=\"Filter\" />\n        </mat-form-field>\n    </form>\n</mat-toolbar>\n\n<mat-grid-list gutterSize=\"15px\" rowHeight=\"500\" [cols]=\"colNum\">\n    <!--Draft for expanding candidate cards.\n        Will need to use *ngFor directive to generate as\n        many cards as a search returns or filters.-->\n    <mat-grid-tile *ngIf=\"matchesFilter('Harold Washington')\">\n        <mat-card style=\"height: 450px; width: 350px\">\n            <mat-card-header>\n                <div mat-card-avatar class=\"washington-header-image\"></div>\n                <mat-card-title>Harold Washington</mat-card-title>\n                <mat-card-subtitle>In Office: 1983 - 1987 </mat-card-subtitle>\n            </mat-card-header>\n            <mat-card-content>\n                <p>\n                    Harold Lee Washington (April 15, 1922 – November 25, 1987)\n                    was an American lawyer and politician who was the 51st\n                    Mayor of Chicago. Washington became the first African\n                    American to be elected as the city's mayor in February 1983.\n                    He served as mayor from April 29, 1983 until his death on\n                    November 25, 1987. Earlier, he was a member of the U.S.\n                    House of Representatives from 1981 to 1983, representing\n                    Illinois's first district. Washington had previously served\n                    in the Illinois State Senate and the Illinois House of\n                    Representatives from 1965 until 1976.\n                </p>\n                <p>\n                    Washington was born in Chicago, and raised in the\n                    Bronzeville neighborhood. After graduating from Roosevelt\n                    University and Northwestern University School of Law, he\n                    became involved in local 3rd Ward politics under future\n                    Congressman Ralph Metcalfe.\n                </p>\n            </mat-card-content>\n        </mat-card>\n    </mat-grid-tile>\n\n    <mat-grid-tile *ngIf=\"matchesFilter('Levi Boone')\">\n        <mat-card style=\"height: 450px; width: 350px\">\n            <mat-card-header>\n                <div mat-card-avatar class=\"boone-header-image\"></div>\n                <mat-card-title>Levi Boone</mat-card-title>\n                <mat-card-subtitle>In Office: 1855 - 1856 </mat-card-subtitle>\n            </mat-card-header>\n            <mat-card-content>\n                <p>\n                    Boone was born near Lexington, Kentucky, the seventh son of\n                    Squire and Anna Grubbs Boone. Squire Boone, Sr. was Daniel\n                    Boone’s father and Levi Boone’s great-grandfather, making\n                    Levi Boone Daniel Boone's great-nephew. Young Levi lost his\n                    father at the age of 9 when Squire finally succumbed to\n                    wounds he suffered at the Battle of Horseshoe Bend.\n                </p>\n                <p>\n                    Despite the poverty the family was plunged into by the death\n                    of Squire Boone, Levi graduated from the medical school of\n                    Transylvania University in Lexington, Kentucky in 1829 at\n                    the age of 21. He moved to Illinois and eventually\n                    established a practice in Hillsboro. In 1832, he served in\n                    the Black Hawk War, first in the cavalry and then as a\n                    surgeon. In 1833, Dr. Boone married Louise M. Smith,\n                    daughter of Theophilus W. Smith, Justice of the Illinois\n                    Supreme Court, with whom he had 11 children.\n                </p>\n            </mat-card-content>\n        </mat-card>\n    </mat-grid-tile>\n\n    <mat-grid-tile *ngIf=\"matchesFilter('Edward Joseph Kelly')\">\n        <mat-card style=\"height: 450px; width: 350px\">\n            <mat-card-header>\n                <div mat-card-avatar class=\"kelly-header-image\"></div>\n                <mat-card-title>Edward Jospeh Kelly</mat-card-title>\n                <mat-card-subtitle>In Office: 1933- 1947 </mat-card-subtitle>\n            </mat-card-header>\n            <mat-card-content>\n                <p>\n                    Edward Joseph Kelly (May 1, 1876 – October 20, 1950) was an\n                    American politician who served as the 46th Mayor of Chicago\n                    from April 17, 1933 until April 15, 1947.\n                </p>\n                <p>\n                    Prior to being mayor of Chicago, Kelly served as chief\n                    engineer of the Chicago Sanitary District during the 1920s.\n                </p>\n                <p>\n                    In March 1924, Kelly became president of the South Park\n                    Commission. Upon his election he declared the end to an era\n                    of \"Deenen Republicans\", a faction of South Side Republicans\n                    allied with Robert R. McCormick which had lost control of\n                    the South Park Commission in the March 1924 municipal\n                    elections.\n                </p>\n                <p>\n                    He presided over the completion and opening of Soldier\n                    Field, which was built and operated by the South Park\n                    Commission.\n                </p>\n            </mat-card-content>\n        </mat-card>\n    </mat-grid-tile>\n\n    <!--Expansion Panel Idea-->\n    <!--\n        <mat-accordion>\n            <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                    <mat-panel-title>\n                        <!--Candidate Name\n                        Harold Washington\n                    </mat-panel-title>\n                    <mat-panel-description>\n                        <!--Years in Office\n                    </mat-panel-description>\n                </mat-expansion-panel-header>\n                <!--Candidate Description goes here\n                <mat-card>\n                    <mat-card-header>\n                        <div mat-card-avatar class=\"header-image\">\n                            <!--Image goes in the above opening tag\n                        </div>\n                    </mat-card-header>\n                </mat-card>\n            </mat-expansion-panel>\n        </mat-accordion>\n    </mat-grid-tile>\n\n    <mat-grid-tile>\n        <mat-accordion>\n            <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                    <div mat-card-avatar>\n                        <!--Image goes in the above opening tag\n                    </div>\n                    <mat-panel-title>\n                        <!--Candidate Name\n                    </mat-panel-title>\n                    <mat-panel-description>\n                        <!--Years in Office\n                    </mat-panel-description>\n                </mat-expansion-panel-header>\n                <!--Candidate Description goes here\n            </mat-expansion-panel>\n        </mat-accordion>\n    </mat-grid-tile>\n\n    <mat-grid-tile>\n        <mat-accordion>\n            <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                    <div mat-card-avatar>\n                        <!--Image goes in the above opening tag\n                    </div>\n                    <mat-panel-title>\n                        <!--Candidate Name\n                    </mat-panel-title>\n                    <mat-panel-description>\n                        <!--Years in Office\n                    </mat-panel-description>\n                </mat-expansion-panel-header>\n                <!--Candidate Description goes here\n            </mat-expansion-panel>\n        </mat-accordion>\n    </mat-grid-tile>\n\n    <mat-grid-tile>\n        <mat-accordion>\n            <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                    <div mat-card-avatar>\n                        <!--Image goes in the above opening tag\n                    </div>\n                    <mat-panel-title>\n                        <!--Candidate Name\n                    </mat-panel-title>\n                    <mat-panel-description>\n                        <!--Years in Office\n                    </mat-panel-description>\n                </mat-expansion-panel-header>\n                <!--Candidate Description goes here\n            </mat-expansion-panel>\n        </mat-accordion>\n    </mat-grid-tile>\n\n    <mat-grid-tile>\n        <mat-accordion>\n            <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                    <div mat-card-avatar>\n                        <!--Image goes in the above opening tag\n                    </div>\n                    <mat-panel-title>\n                        <!--Candidate Name\n                    </mat-panel-title>\n                    <mat-panel-description>\n                        <!--Years in Office\n                    </mat-panel-description>\n                </mat-expansion-panel-header>\n                <!--Candidate Description goes here\n            </mat-expansion-panel>\n        </mat-accordion>\n    </mat-grid-tile>\n    -->\n</mat-grid-list>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cities/cities.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cities/cities.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar style=\"height: 100px\" color=\"secondary\" class=\"mat-elevation-z4\">\n    <mat-form-field>\n        <mat-label>Select City</mat-label>\n        <mat-select [(value)]=\"selected\">\n            <!--<mat-option *ngFor=\"let city of cities\" [value]=\"city\">\n                {{ city }}\n            </mat-option>-->\n            <mat-option value=\"Chicago\">\n                Chicago\n            </mat-option>\n            <mat-option value=\"New York\">\n                New York\n            </mat-option>\n        </mat-select>\n    </mat-form-field>\n</mat-toolbar>\n\n<div>\n    <mat-card>\n        <mat-card-header>\n            <mat-card-title>\n                1910\n            </mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n            Between 1910 and 1930, the African American population of Chicago\n            increased dramatically, from 44,103 to 233,903. This Great Migration\n            had an immense cultural impact, called the Chicago Black\n            Renaissance, part of the New Negro Movement, in art, literature, and\n            music. Continuing racial tensions and violence, such as the Chicago\n            Race Riot of 1919, also occurred.\n        </mat-card-content>\n\n        <img\n            mat-card-image\n            src=\"https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1413&q=80\"\n        />\n\n        <mat-card-header>\n            <mat-card-title>\n                1920\n            </mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n            The ratification of the 18th amendment to the Constitution in 1919\n            made the production and sale (including exportation) of alcoholic\n            beverages illegal in the United States. This ushered in the\n            beginning of what is known as the Gangster Era, a time that roughly\n            spans from 1919 until 1933 when Prohibition was repealed. The 1920s\n            saw gangsters, including Al Capone, Dion O'Banion, Bugs Moran and\n            Tony Accardo battle law enforcement and each other on the streets of\n            Chicago during the Prohibition era. Chicago was the location of the\n            infamous St. Valentine's Day Massacre in 1929, when Al Capone sent\n            men to gun down members of a rival gang, North Side, led by Bugs\n            Moran.\n        </mat-card-content>\n    </mat-card>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<footer>Footer Works!</footer>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/graphs/graphs.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/graphs/graphs.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>graphs works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-card style=\"height: 95%;\">\n    <mat-card-content>\n        <div id=\"home-container\">\n            <h1 id=\"welcome-heading\">Welcome</h1>\n            <br />\n            <!--\n            <mat-icon id=\"how-1\" class=\"home-icon\">\n                how_to_vote\n            </mat-icon>\n            <br />\n            <mat-icon class=\"home-icon\">where_to_vote</mat-icon>\n            -->\n        </div>\n    </mat-card-content>\n</mat-card>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login-dialog/login-dialog.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login-dialog/login-dialog.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Welcome</h1>\n<div mat-dialog-content>\n    <mat-form-field>\n        <input matInput [(ngModel)]=\"data.username\" type=\"text\" placeholder=\"Username\" />\n    </mat-form-field>\n    <br />\n    <mat-form-field>\n        <input matInput [(ngModel)]=\"data.password\" type=\"password\" placeholder=\"Password\" />\n    </mat-form-field>\n    <mat-progress-bar mode=\"indeterminate\" *ngIf=\"inProgress\"></mat-progress-bar>\n</div>\n<div mat-dialog-actions>\n    <button mat-button (click)=\"login()\" cdkFocusInitial>LOGIN</button>\n    <button mat-button (click)=\"register()\">REGISTER</button>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>not-found works!</p>\n\n\n<app-footer></app-footer>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
            /* harmony import */ var _graphs_graphs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./graphs/graphs.component */ "./src/app/graphs/graphs.component.ts");
            /* harmony import */ var _cities_cities_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cities/cities.component */ "./src/app/cities/cities.component.ts");
            /* harmony import */ var _candidates_candidates_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./candidates/candidates.component */ "./src/app/candidates/candidates.component.ts");
            var routes = [
                { path: 'candidates', component: _candidates_candidates_component__WEBPACK_IMPORTED_MODULE_7__["CandidatesComponent"] },
                { path: 'cities', component: _cities_cities_component__WEBPACK_IMPORTED_MODULE_6__["CitiesComponent"] },
                { path: 'graphs', component: _graphs_graphs_component__WEBPACK_IMPORTED_MODULE_5__["GraphsComponent"] },
                { path: 'home', redirectTo: '' },
                { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
                { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"] },
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.sass": 
        /*!************************************!*\
          !*** ./src/app/app.component.sass ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#toolbar-button {\n  height: 100%;\n  vertical-align: middle;\n  position: relative;\n}\n\n#container {\n  top: 64px !important;\n}\n\n#sidenav-button {\n  width: 100%;\n  text-align: left;\n}\n\n@media (max-width: 599px) {\n  #container {\n    top: 56px !important;\n  }\n}\n\n.center-text {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.mat-drawer-content {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  z-index: -2 !important;\n}\n\n.sidenav-container {\n  z-index: -1 !important;\n}\n\n.fill-space {\n  /* Fill remaining space in tool bar */\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Rhbm5lci9Ccm93bi9DaGljYWdvL0NoaUVsZWN0aW9ucy9Ob2RlL2NoaS1mcm9udGVuZC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURFQTtFQUNJLG9CQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURBQTtFQUNJO0lBQ0ksb0JBQUE7RUNHTjtBQUNGOztBREZBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FDSUo7O0FERkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FDS0o7O0FESEE7RUFDSSxzQkFBQTtBQ01KOztBREhBO0VBQ0kscUNBQUE7RUFDQSxjQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiN0b29sYmFyLWJ1dHRvblxuICAgIGhlaWdodDogMTAwJVxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcblxuI2NvbnRhaW5lclxuICAgIHRvcDogNjRweCAhaW1wb3J0YW50XG5cbiNzaWRlbmF2LWJ1dHRvblxuICAgIHdpZHRoOiAxMDAlXG4gICAgdGV4dC1hbGlnbjogbGVmdFxuXG5AbWVkaWEobWF4LXdpZHRoOiA1OTlweClcbiAgICAjY29udGFpbmVyXG4gICAgICAgIHRvcDogNTZweCAhaW1wb3J0YW50XG5cbi5jZW50ZXItdGV4dFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICAgIHRvcDogMFxuICAgIGJvdHRvbTogMFxuICAgIGxlZnQ6IDBcbiAgICByaWdodDogMFxuXG4ubWF0LWRyYXdlci1jb250ZW50XG4gICAgZGlzcGxheTogZmxleFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydFxuICAgIHotaW5kZXg6IC0yICFpbXBvcnRhbnRcbiAgICBcbi5zaWRlbmF2LWNvbnRhaW5lciBcbiAgICB6LWluZGV4OiAtMSAhaW1wb3J0YW50XG4gICAgXG5cbi5maWxsLXNwYWNlIFxuICAgIC8qIEZpbGwgcmVtYWluaW5nIHNwYWNlIGluIHRvb2wgYmFyICovXG4gICAgZmxleDogMSAxIGF1dG9cbiIsIiN0b29sYmFyLWJ1dHRvbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jY29udGFpbmVyIHtcbiAgdG9wOiA2NHB4ICFpbXBvcnRhbnQ7XG59XG5cbiNzaWRlbmF2LWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgI2NvbnRhaW5lciB7XG4gICAgdG9wOiA1NnB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5jZW50ZXItdGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4ubWF0LWRyYXdlci1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHotaW5kZXg6IC0yICFpbXBvcnRhbnQ7XG59XG5cbi5zaWRlbmF2LWNvbnRhaW5lciB7XG4gIHotaW5kZXg6IC0xICFpbXBvcnRhbnQ7XG59XG5cbi5maWxsLXNwYWNlIHtcbiAgLyogRmlsbCByZW1haW5pbmcgc3BhY2UgaW4gdG9vbCBiYXIgKi9cbiAgZmxleDogMSAxIGF1dG87XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-dialog/login-dialog.component */ "./src/app/login-dialog/login-dialog.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent(router, dialog) {
                    this.router = router;
                    this.dialog = dialog;
                    this.title = 'chi-frontend';
                    // Store the twitter fontawesome icon
                    this.faTwitter = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTwitter"];
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.opened = false;
                };
                AppComponent.prototype.openDialog = function () {
                    var dialogRef = this.dialog.open(_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_4__["LoginDialogComponent"], {
                        width: '250px',
                        data: { username: this.username, password: this.password },
                    });
                    dialogRef
                        .afterClosed()
                        .subscribe()
                        .unsubscribe();
                };
                AppComponent.prototype.gotToLink = function (url) {
                };
                AppComponent.prototype.logout = function () {
                    this.router.navigate(['/']);
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
            /* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
            /* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
            /* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
            /* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
            /* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
            /* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
            /* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
            /* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
            /* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
            /* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
            /* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
            /* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
            /* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
            /* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
            /* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
            /* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
            /* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
            /* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            /* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
            /* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
            /* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
            /* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
            /* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
            /* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
            /* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
            /* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
            /* harmony import */ var _candidates_candidates_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./candidates/candidates.component */ "./src/app/candidates/candidates.component.ts");
            /* harmony import */ var _cities_cities_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./cities/cities.component */ "./src/app/cities/cities.component.ts");
            /* harmony import */ var _graphs_graphs_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./graphs/graphs.component */ "./src/app/graphs/graphs.component.ts");
            /* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
            /* harmony import */ var _login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./login-dialog/login-dialog.component */ "./src/app/login-dialog/login-dialog.component.ts");
            //Angular Imports
            //Angular Material Components
            //CDK Imports
            //FontAwesome
            //My Components
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _home_home_component__WEBPACK_IMPORTED_MODULE_39__["HomeComponent"],
                        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_40__["NotFoundComponent"],
                        _candidates_candidates_component__WEBPACK_IMPORTED_MODULE_41__["CandidatesComponent"],
                        _cities_cities_component__WEBPACK_IMPORTED_MODULE_42__["CitiesComponent"],
                        _graphs_graphs_component__WEBPACK_IMPORTED_MODULE_43__["GraphsComponent"],
                        _footer_footer_component__WEBPACK_IMPORTED_MODULE_44__["FooterComponent"],
                        _login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_45__["LoginDialogComponent"],
                    ],
                    imports: [
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"],
                        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
                        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                        _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
                        _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                        _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__["MatSliderModule"],
                        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"],
                        _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
                        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatSidenavModule"],
                        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__["MatToolbarModule"],
                        _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListModule"],
                        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
                        _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardModule"],
                        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__["MatStepperModule"],
                        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__["MatTabsModule"],
                        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__["MatExpansionModule"],
                        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__["MatButtonToggleModule"],
                        _angular_material_chips__WEBPACK_IMPORTED_MODULE_27__["MatChipsModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__["MatIconModule"],
                        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"],
                        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"],
                        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__["MatDialogModule"],
                        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
                        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_33__["MatSnackBarModule"],
                        _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatTableModule"],
                        _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__["MatSortModule"],
                        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_36__["MatPaginatorModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_37__["LayoutModule"],
                        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_38__["FontAwesomeModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
                    ],
                    // Components Used for Dialog need to be placed in entryComponents
                    entryComponents: [_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_45__["LoginDialogComponent"]],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/candidates/candidates.component.sass": 
        /*!******************************************************!*\
          !*** ./src/app/candidates/candidates.component.sass ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".washington-header-image {\n  background-image: url(\"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Washington_h_%281%29.jpg/675px-Washington_h_%281%29.jpg\");\n  background-size: cover;\n}\n\n.boone-header-image {\n  background-image: url(\"https://upload.wikimedia.org/wikipedia/commons/4/4a/Leviboone.jpeg\");\n  background-size: cover;\n}\n\n.kelly-header-image {\n  background-image: url(\"https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/EdwardJKelly.jpg/330px-EdwardJKelly.jpg\");\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Rhbm5lci9Ccm93bi9DaGljYWdvL0NoaUVsZWN0aW9ucy9Ob2RlL2NoaS1mcm9udGVuZC9zcmMvYXBwL2NhbmRpZGF0ZXMvY2FuZGlkYXRlcy5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvY2FuZGlkYXRlcy9jYW5kaWRhdGVzLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMElBQUE7RUFDQSxzQkFBQTtBQ0NKOztBRENBO0VBQ0ksMkZBQUE7RUFDQSxzQkFBQTtBQ0VKOztBREFBO0VBQ0ksMEhBQUE7RUFDQSxzQkFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvY2FuZGlkYXRlcy9jYW5kaWRhdGVzLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLndhc2hpbmd0b24taGVhZGVyLWltYWdlXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2IvYmMvV2FzaGluZ3Rvbl9oXyUyODElMjkuanBnLzY3NXB4LVdhc2hpbmd0b25faF8lMjgxJTI5LmpwZycpXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlclxuXG4uYm9vbmUtaGVhZGVyLWltYWdlXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zLzQvNGEvTGV2aWJvb25lLmpwZWcnKVxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXJcblxuLmtlbGx5LWhlYWRlci1pbWFnZVxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi81LzU4L0Vkd2FyZEpLZWxseS5qcGcvMzMwcHgtRWR3YXJkSktlbGx5LmpwZycpXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciIsIi53YXNoaW5ndG9uLWhlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvYi9iYy9XYXNoaW5ndG9uX2hfJTI4MSUyOS5qcGcvNjc1cHgtV2FzaGluZ3Rvbl9oXyUyODElMjkuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uYm9vbmUtaGVhZGVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy80LzRhL0xldmlib29uZS5qcGVnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ua2VsbHktaGVhZGVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi81LzU4L0Vkd2FyZEpLZWxseS5qcGcvMzMwcHgtRWR3YXJkSktlbGx5LmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/candidates/candidates.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/candidates/candidates.component.ts ***!
          \****************************************************/
        /*! exports provided: CandidatesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidatesComponent", function () { return CandidatesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
            var CandidatesComponent = /** @class */ (function () {
                function CandidatesComponent(breakpointObserver) {
                    this.breakpointObserver = breakpointObserver;
                }
                CandidatesComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.filter = '';
                    this.colNum = 3;
                    this.layoutChanges$ = this.breakpointObserver.observe([
                        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].HandsetPortrait,
                        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Small,
                        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Medium,
                        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Tablet,
                        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Large,
                    ]);
                    this.layoutChanges = this.layoutChanges$.subscribe(function (result) { return _this.updateLayout(result); });
                };
                CandidatesComponent.prototype.ngOnDestroy = function () {
                    this.layoutChanges.unsubscribe();
                };
                CandidatesComponent.prototype.updateLayout = function (result) {
                    if (result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].HandsetPortrait]) {
                        console.log('Small Screen');
                        this.colNum = 1;
                    }
                    else if (result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Medium]) {
                        this.colNum = 2;
                    }
                    else if (result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Large]) {
                        console.log('Large Screen');
                        this.colNum = 3;
                    }
                };
                CandidatesComponent.prototype.matchesFilter = function (name) {
                    if (this.filter === '')
                        return true;
                    return this.filter.includes(name, 0);
                };
                return CandidatesComponent;
            }());
            CandidatesComponent.ctorParameters = function () { return [
                { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] }
            ]; };
            CandidatesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-candidates',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./candidates.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/candidates/candidates.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./candidates.component.sass */ "./src/app/candidates/candidates.component.sass")).default]
                })
            ], CandidatesComponent);
            /***/ 
        }),
        /***/ "./src/app/cities/cities.component.sass": 
        /*!**********************************************!*\
          !*** ./src/app/cities/cities.component.sass ***!
          \**********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NpdGllcy9jaXRpZXMuY29tcG9uZW50LnNhc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/cities/cities.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/cities/cities.component.ts ***!
          \********************************************/
        /*! exports provided: CitiesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitiesComponent", function () { return CitiesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var CitiesComponent = /** @class */ (function () {
                function CitiesComponent() {
                    this.cities = ['Chicago', 'New York'];
                    this.selected = 'Chicago';
                }
                CitiesComponent.prototype.ngOnInit = function () { };
                return CitiesComponent;
            }());
            CitiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-cities',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cities.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cities/cities.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cities.component.sass */ "./src/app/cities/cities.component.sass")).default]
                })
            ], CitiesComponent);
            /***/ 
        }),
        /***/ "./src/app/footer/footer.component.sass": 
        /*!**********************************************!*\
          !*** ./src/app/footer/footer.component.sass ***!
          \**********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".footer {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Rhbm5lci9Ccm93bi9DaGljYWdvL0NoaUVsZWN0aW9ucy9Ob2RlL2NoaS1mcm9udGVuZC9zcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICAgIGJvdHRvbTogMFxuICAgIHdpZHRoOiAxMDAlXG4gICAgIiwiLmZvb3RlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/footer/footer.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/footer/footer.component.ts ***!
          \********************************************/
        /*! exports provided: FooterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function () { return FooterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FooterComponent = /** @class */ (function () {
                function FooterComponent() {
                }
                FooterComponent.prototype.ngOnInit = function () { };
                return FooterComponent;
            }());
            FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-footer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.sass */ "./src/app/footer/footer.component.sass")).default]
                })
            ], FooterComponent);
            /***/ 
        }),
        /***/ "./src/app/graphs/graphs.component.sass": 
        /*!**********************************************!*\
          !*** ./src/app/graphs/graphs.component.sass ***!
          \**********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyYXBocy9ncmFwaHMuY29tcG9uZW50LnNhc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/graphs/graphs.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/graphs/graphs.component.ts ***!
          \********************************************/
        /*! exports provided: GraphsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphsComponent", function () { return GraphsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var GraphsComponent = /** @class */ (function () {
                function GraphsComponent() {
                }
                GraphsComponent.prototype.ngOnInit = function () {
                };
                return GraphsComponent;
            }());
            GraphsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-graphs',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./graphs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/graphs/graphs.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./graphs.component.sass */ "./src/app/graphs/graphs.component.sass")).default]
                })
            ], GraphsComponent);
            /***/ 
        }),
        /***/ "./src/app/home/home.component.sass": 
        /*!******************************************!*\
          !*** ./src/app/home/home.component.sass ***!
          \******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".fill-space {\n  /* Fill remaining space in tool bar */\n  flex: 1 1 auto;\n}\n\n.home-icon {\n  position: absolute;\n  font-size: 200px;\n  opacity: 50%;\n}\n\n#welcome-heading {\n  position: absolute;\n  font-size: 350%;\n  top: 40%;\n}\n\n#home-container {\n  display: flex;\n  justify-content: center;\n}\n\n#how-1 {\n  transform: rotate(30deg);\n  left: 30%;\n  top: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Rhbm5lci9Ccm93bi9DaGljYWdvL0NoaUVsZWN0aW9ucy9Ob2RlL2NoaS1mcm9udGVuZC9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUNBQUE7RUFDQSxjQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0VKOztBREFBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtBQ0dKOztBRERBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FDSUo7O0FERkE7RUFDSSx3QkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsbC1zcGFjZSBcbiAgICAvKiBGaWxsIHJlbWFpbmluZyBzcGFjZSBpbiB0b29sIGJhciAqL1xuICAgIGZsZXg6IDEgMSBhdXRvXG5cbi5ob21lLWljb25cbiAgICBwb3NpdGlvbjogYWJzb2x1dGVcbiAgICBmb250LXNpemU6IDIwMHB4XG4gICAgb3BhY2l0eTogNTAlXG5cbiN3ZWxjb21lLWhlYWRpbmdcbiAgICBwb3NpdGlvbjogYWJzb2x1dGVcbiAgICBmb250LXNpemU6IDM1MCVcbiAgICB0b3A6IDQwJVxuXG4jaG9tZS1jb250YWluZXJcbiAgICBkaXNwbGF5OiBmbGV4XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcblxuI2hvdy0xXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpXG4gICAgbGVmdDogMzAlXG4gICAgdG9wOiAyNSVcbiIsIi5maWxsLXNwYWNlIHtcbiAgLyogRmlsbCByZW1haW5pbmcgc3BhY2UgaW4gdG9vbCBiYXIgKi9cbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5ob21lLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMjAwcHg7XG4gIG9wYWNpdHk6IDUwJTtcbn1cblxuI3dlbGNvbWUtaGVhZGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAzNTAlO1xuICB0b3A6IDQwJTtcbn1cblxuI2hvbWUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiNob3ctMSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcbiAgbGVmdDogMzAlO1xuICB0b3A6IDI1JTtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/home/home.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/home/home.component.ts ***!
          \****************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent(meta) {
                    this.meta = meta;
                    this.meta.addTag({
                        name: 'description',
                        content: 'Engaging the public in election results and data science.',
                    });
                }
                HomeComponent.prototype.ngOnInit = function () { };
                return HomeComponent;
            }());
            HomeComponent.ctorParameters = function () { return [
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"] }
            ]; };
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.sass */ "./src/app/home/home.component.sass")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/login-dialog/login-dialog.component.sass": 
        /*!**********************************************************!*\
          !*** ./src/app/login-dialog/login-dialog.component.sass ***!
          \**********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLWRpYWxvZy9sb2dpbi1kaWFsb2cuY29tcG9uZW50LnNhc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/login-dialog/login-dialog.component.ts": 
        /*!********************************************************!*\
          !*** ./src/app/login-dialog/login-dialog.component.ts ***!
          \********************************************************/
        /*! exports provided: LoginDialogComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDialogComponent", function () { return LoginDialogComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                })
            };
            var LoginDialogComponent = /** @class */ (function () {
                //TODO Interface for data parameter
                function LoginDialogComponent(dialogRef, http, data) {
                    this.dialogRef = dialogRef;
                    this.http = http;
                    this.data = data;
                    //Sleep helper
                    //! For demo only
                    this.sleep = function (ms) { return new Promise(function (resolve) { return setTimeout(resolve, ms); }); };
                }
                LoginDialogComponent.prototype.ngOnInit = function () {
                    this.inProgress = false;
                };
                LoginDialogComponent.prototype.login = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.inProgress = true;
                                    console.log(this.data);
                                    if (!_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].development) return [3 /*break*/, 2];
                                    return [4 /*yield*/, this.sleep(1500)];
                                case 1:
                                    _a.sent();
                                    _a.label = 2;
                                case 2:
                                    this.inProgress = false;
                                    this.dialogRef.close();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                LoginDialogComponent.prototype.sendLogin = function () {
                    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + 'login', this.data, httpOptions);
                };
                LoginDialogComponent.prototype.register = function () {
                    this.dialogRef.close();
                };
                return LoginDialogComponent;
            }());
            LoginDialogComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
            ]; };
            LoginDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login-dialog',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login-dialog/login-dialog.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login-dialog.component.sass */ "./src/app/login-dialog/login-dialog.component.sass")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], LoginDialogComponent);
            /***/ 
        }),
        /***/ "./src/app/not-found/not-found.component.sass": 
        /*!****************************************************!*\
          !*** ./src/app/not-found/not-found.component.sass ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNhc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/not-found/not-found.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/not-found/not-found.component.ts ***!
          \**************************************************/
        /*! exports provided: NotFoundComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () { return NotFoundComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var NotFoundComponent = /** @class */ (function () {
                function NotFoundComponent() {
                }
                NotFoundComponent.prototype.ngOnInit = function () {
                };
                return NotFoundComponent;
            }());
            NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-not-found',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./not-found.component.sass */ "./src/app/not-found/not-found.component.sass")).default]
                })
            ], NotFoundComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false,
                development: true,
                api: 'http://localhost:3000/api/'
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /home/tanner/Brown/Chicago/ChiElections/Node/chi-frontend/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map