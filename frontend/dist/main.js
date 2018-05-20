(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _stocks_stocks_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stocks/stocks.component */ "./src/app/stocks/stocks.component.ts");
/* harmony import */ var _stock_detail_stock_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stock-detail/stock-detail.component */ "./src/app/stock-detail/stock-detail.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _stock_charts_stock_charts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stock-charts/stock-charts.component */ "./src/app/stock-charts/stock-charts.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/stocks', pathMatch: 'full' },
    { path: 'stocks', component: _stocks_stocks_component__WEBPACK_IMPORTED_MODULE_1__["StocksComponent"] },
    { path: 'detail/:symbol', component: _stock_detail_stock_detail_component__WEBPACK_IMPORTED_MODULE_2__["StockDetailComponent"] },
    { path: 'chart', component: _stock_charts_stock_charts_component__WEBPACK_IMPORTED_MODULE_4__["StockChartsComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* AppComponent's private CSS styles */\nh1 {\n    font-size: 1.2em;\n    color: #999;\n    margin-bottom: 0;\n  }\nh2 {\n    font-size: 2em;\n    margin-top: 0;\n    padding-top: 0;\n  }\nnav a {\n    padding: 5px 10px;\n    text-decoration: none;\n    margin-top: 10px;\n    display: inline-block;\n    background-color: #eee;\n    border-radius: 4px;\n  }\nnav a:visited, a:link {\n    color: #607D8B;\n  }\nnav a:hover {\n    color: #039be5;\n    background-color: #CFD8DC;\n  }\nnav a.active {\n    color: #039be5;\n  }\n  "

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\n<nav>\n  <a routerLink=\"/stocks\">Stocks</a>\n</nav>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Stocks Beta';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _stock_detail_stock_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stock-detail/stock-detail.component */ "./src/app/stock-detail/stock-detail.component.ts");
/* harmony import */ var _stocks_stocks_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stocks/stocks.component */ "./src/app/stocks/stocks.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _stocks_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./stocks.service */ "./src/app/stocks.service.ts");
/* harmony import */ var _stock_charts_stock_charts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./stock-charts/stock-charts.component */ "./src/app/stock-charts/stock-charts.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _stock_detail_stock_detail_component__WEBPACK_IMPORTED_MODULE_7__["StockDetailComponent"],
                _stocks_stocks_component__WEBPACK_IMPORTED_MODULE_8__["StocksComponent"],
                _stock_charts_stock_charts_component__WEBPACK_IMPORTED_MODULE_11__["StockChartsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
            ],
            providers: [_stocks_service__WEBPACK_IMPORTED_MODULE_10__["StocksService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/model/stock.ts":
/*!********************************!*\
  !*** ./src/app/model/stock.ts ***!
  \********************************/
/*! exports provided: Stock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stock", function() { return Stock; });
var Stock = /** @class */ (function () {
    function Stock() {
    }
    return Stock;
}());



/***/ }),

/***/ "./src/app/stock-charts/stock-charts.component.css":
/*!*********************************************************!*\
  !*** ./src/app/stock-charts/stock-charts.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/stock-charts/stock-charts.component.html":
/*!**********************************************************!*\
  !*** ./src/app/stock-charts/stock-charts.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  stock-charts works!\n</p>\n<div #chart>\n  <!-- Chart will appear here -->\n</div>\n"

/***/ }),

/***/ "./src/app/stock-charts/stock-charts.component.ts":
/*!********************************************************!*\
  !*** ./src/app/stock-charts/stock-charts.component.ts ***!
  \********************************************************/
/*! exports provided: StockChartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockChartsComponent", function() { return StockChartsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _stocks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stocks.service */ "./src/app/stocks.service.ts");
/* harmony import */ var plotly_js_lib_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! plotly.js/lib/core */ "./node_modules/plotly.js/lib/core.js");
/* harmony import */ var plotly_js_lib_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(plotly_js_lib_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StockChartsComponent = /** @class */ (function () {
    function StockChartsComponent(route, router, stocksService) {
        this.route = route;
        this.router = router;
        this.stocksService = stocksService;
        this.stockMap = new Map();
        this.date = [];
        this.price = [];
    }
    StockChartsComponent.prototype.ngOnInit = function () {
        // this.route.paramMap
        //   .map((params: ParamMap) => {
        //       var stocks = params.getAll('stocks');
        //       stocks.forEach(stock =>
        //         this.stocksService.getStockDaily(stock).subscribe( stockDaily =>
        //           this.stockMap.set(stock, stockDaily)
        //         ));
        //   })
        var _this = this;
        this.stock = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (params) { return _this.stocksService.getStockDaily(params.getAll("compare")[0]); }));
        // this.stock = this.route.paramMap
        // .switchMap((params: ParamMap) =>
        //   this.stocksService.getStockDaily(params.getAll("compare")[0]));
        this.stock.subscribe(function (stock) {
            console.log("Data = " + stock[0].date);
            stock.forEach(function (stock) {
                var dateTime = new Date(stock.date);
                //console.log("Datetime = " + dateTime)
                _this.date.push(dateTime);
                _this.price.push(stock.close);
            });
            _this.createGraph();
        });
    };
    StockChartsComponent.prototype.createGraph = function () {
        var element = this.el.nativeElement;
        var data = [
            {
                //x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
                //y: [1, 3, 6],
                x: this.date,
                y: this.price,
                type: 'scatter'
            }
        ];
        Plotly.newPlot(element, data);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chart'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], StockChartsComponent.prototype, "el", void 0);
    StockChartsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stock-charts',
            template: __webpack_require__(/*! ./stock-charts.component.html */ "./src/app/stock-charts/stock-charts.component.html"),
            styles: [__webpack_require__(/*! ./stock-charts.component.css */ "./src/app/stock-charts/stock-charts.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _stocks_service__WEBPACK_IMPORTED_MODULE_2__["StocksService"]])
    ], StockChartsComponent);
    return StockChartsComponent;
}());



/***/ }),

/***/ "./src/app/stock-detail/stock-detail.component.css":
/*!*********************************************************!*\
  !*** ./src/app/stock-detail/stock-detail.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/stock-detail/stock-detail.component.html":
/*!**********************************************************!*\
  !*** ./src/app/stock-detail/stock-detail.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Quote</h4>\n<div *ngIf=\"quote\">\n  <h2>{{ quote.symbol | uppercase }} Details</h2>\n  <div><span>price: </span>{{quote.latestPrice}}</div>\n</div>\n"

/***/ }),

/***/ "./src/app/stock-detail/stock-detail.component.ts":
/*!********************************************************!*\
  !*** ./src/app/stock-detail/stock-detail.component.ts ***!
  \********************************************************/
/*! exports provided: StockDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockDetailComponent", function() { return StockDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_stock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/stock */ "./src/app/model/stock.ts");
/* harmony import */ var _stocks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stocks.service */ "./src/app/stocks.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StockDetailComponent = /** @class */ (function () {
    function StockDetailComponent(route, location, stocksService) {
        this.route = route;
        this.location = location;
        this.stocksService = stocksService;
    }
    StockDetailComponent.prototype.ngOnInit = function () {
        this.fetchQuote();
    };
    StockDetailComponent.prototype.fetchQuote = function () {
        var _this = this;
        var symbol = this.route.snapshot.paramMap.get('symbol');
        console.log("Fetching quote: " + symbol);
        this.stocksService.getQuote(symbol)
            .subscribe(function (quote) { return _this.quote = quote; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_stock__WEBPACK_IMPORTED_MODULE_1__["Stock"])
    ], StockDetailComponent.prototype, "stock", void 0);
    StockDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stock-detail',
            template: __webpack_require__(/*! ./stock-detail.component.html */ "./src/app/stock-detail/stock-detail.component.html"),
            styles: [__webpack_require__(/*! ./stock-detail.component.css */ "./src/app/stock-detail/stock-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _stocks_service__WEBPACK_IMPORTED_MODULE_2__["StocksService"]])
    ], StockDetailComponent);
    return StockDetailComponent;
}());



/***/ }),

/***/ "./src/app/stocks.service.ts":
/*!***********************************!*\
  !*** ./src/app/stocks.service.ts ***!
  \***********************************/
/*! exports provided: StocksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StocksService", function() { return StocksService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var StocksService = /** @class */ (function () {
    function StocksService(http) {
        this.http = http;
        this.stocksUrl = 'http://localhost:8080/stocks';
    }
    StocksService.prototype.getStocks = function () {
        return this.http.get(this.stocksUrl);
    };
    StocksService.prototype.addStock = function (stock) {
        var _this = this;
        this.log("Adding stock " + stock.symbol + " " + stock.purchasePrice + " " + stock.quantity);
        return this.http.post(this.stocksUrl, stock, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (stock) { return _this.log("added stock w/ symbol=" + stock.symbol); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addStock')));
    };
    StocksService.prototype.deleteStock = function (stock) {
        var _this = this;
        var id = typeof stock === 'number' ? stock : stock.symbol;
        var url = this.stocksUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("deleted stock id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteStock')));
    };
    StocksService.prototype.getQuote = function (symbol) {
        console.log("Stock service getting quote: " + symbol);
        return this.http.get(this.stocksUrl + "/quote/" + symbol);
    };
    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
    StocksService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    /** Log a StockService message with the MessageService */
    StocksService.prototype.log = function (message) {
        console.log('Stock Service: ' + message);
    };
    StocksService.prototype.getStockDaily = function (symbol) {
        return this.http.get(this.stocksUrl + "/daily/" + symbol);
    };
    StocksService.prototype.getAccountHealth = function () {
        console.log("Getting account health");
        return this.http.get(this.stocksUrl + "/account/health");
    };
    StocksService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], StocksService);
    return StocksService;
}());



/***/ }),

/***/ "./src/app/stocks/stocks.component.css":
/*!*********************************************!*\
  !*** ./src/app/stocks/stocks.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  .stocks {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 17em;\n  }\n  .stocks li {\n    position: relative;\n    cursor: pointer;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .stocks li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .stocks a {\n    color: #888;\n    text-decoration: none;\n    position: relative;\n    display: block;\n    width: 250px;\n  }\n  .stocks a:hover {\n    color:#607D8B;\n  }\n  .stocks .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    min-width: 16px;\n    text-align: right;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n  .button {\n    background-color: #eee;\n    border: none;\n    padding: 5px 10px;\n    border-radius: 4px;\n    cursor: pointer;\n    cursor: hand;\n    font-family: Arial;\n  }\n  button:hover {\n    background-color: #cfd8dc;\n  }\n  button.delete {\n    position: relative;\n    left: 220px;\n    top: -32px;\n    background-color: gray !important;\n    color: white;\n  }\n  .example-container {\n    display: flex;\n    flex-direction: column;\n    max-height: 500px;\n    min-width: 300px;\n  }\n  .mat-table {\n    overflow: auto;\n    max-height: 500px;\n  }\n  .mat-column-select {\n    overflow: visible;\n  }\n"

/***/ }),

/***/ "./src/app/stocks/stocks.component.html":
/*!**********************************************!*\
  !*** ./src/app/stocks/stocks.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{title}}</h2>\n\n<div>\n  <label>Add stock:\n    <input #stockName />\n  </label>\n  <label>Purchase Price:\n    <input #purchasePrice />\n  </label>\n  <label>Quantity:\n    <input #quantity />\n  </label>\n  <!-- (click) passes input value to add() and then clears the input -->\n  <button (click)=\"add(stockName.value, purchasePrice.value, quantity.value); stockName.value=''; purchasePrice.value=''; quantity.value='' \">\n    add\n  </button>\n</div>\n\n<button (click)=\"printSelection()\">Print Selected</button>\n<button (click)=\"deleteSelected()\">Delete Selected</button>\n<button routerLink=\"/chart\"(click)=\"chartSelected()\">Chart Selected</button>\n<button (click)=\"detailSelected()\">Detail Selected</button>\n\n<ul class=\"stocks\">\n  <li *ngFor=\"let stock of stocks\"\n      [class.selected]=\"stock === selectedStock\">\n    <a routerLink=\"/detail/{{stock.symbol}}\" (click)=\"onSelect(stock)\">\n      <span class=\"badge\">{{stock.symbol}}</span> {{stock.quantity}} shares @ ${{stock.purchasePrice}}\n    </a>\n    <button class=\"delete\" title=\"delete stock\"\n    (click)=\"delete(stock)\">x</button>\n  </li>\n</ul>\n<div class=\"example-container mat-elevation-z8\">\n  <mat-table #table [dataSource]=\"dataSource\">\n\n    <ng-container matColumnDef=\"select\">\n        <mat-header-cell *matHeaderCellDef>\n          <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                        [checked]=\"selection.hasValue() && isAllSelected()\"\n                        [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n          </mat-checkbox>\n        </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n          <mat-checkbox (click)=\"$event.stopPropagation()\"\n                        (change)=\"$event ? selection.toggle(row) : null\"\n                        [checked]=\"selection.isSelected(row)\">\n          </mat-checkbox>\n        </mat-cell>\n      </ng-container>\n\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"symbol\">\n      <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\n      <mat-cell *matCellDef=\"let stock\"> {{stock.symbol}} </mat-cell>\n    </ng-container>\n\n    <!-- Purchase Price Column -->\n    <ng-container matColumnDef=\"purchasePrice\">\n      <mat-header-cell *matHeaderCellDef> Purchase Price </mat-header-cell>\n      <mat-cell *matCellDef=\"let stock\"> {{stock.purchasePrice}} </mat-cell>\n    </ng-container>\n\n    <!-- Quantity Column -->\n    <ng-container matColumnDef=\"quantity\">\n      <mat-header-cell *matHeaderCellDef> Quantity </mat-header-cell>\n      <mat-cell *matCellDef=\"let stock\"> {{stock.quantity}} </mat-cell>\n    </ng-container>\n\n    <!-- Quote Column -->\n    <ng-container matColumnDef=\"quote\">\n        <mat-header-cell *matHeaderCellDef> Quote </mat-header-cell>\n        <mat-cell *matCellDef=\"let stock\"> {{stock.quote}} </mat-cell>\n      </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"\n             (click)=\"selection.toggle(row)\">\n    </mat-row>\n  </mat-table>\n</div>\n\n<div *ngIf=\"accountHealth\">\n  <h3>Total Value: {{accountHealth.value}}</h3>\n  <h3>Total Gain: {{accountHealth.gain}}</h3>\n</div>\n<!--<app-stock-detail [stock]=\"selectedStock\"></app-stock-detail>-->\n"

/***/ }),

/***/ "./src/app/stocks/stocks.component.ts":
/*!********************************************!*\
  !*** ./src/app/stocks/stocks.component.ts ***!
  \********************************************/
/*! exports provided: StocksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StocksComponent", function() { return StocksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _stocks_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stocks.service */ "./src/app/stocks.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StocksComponent = /** @class */ (function () {
    function StocksComponent(router, stocksService) {
        this.router = router;
        this.stocksService = stocksService;
        this.title = 'My Stocks';
        this.displayedColumns = ['select', 'symbol', 'purchasePrice', 'quantity', 'quote'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](true, []);
    }
    StocksComponent.prototype.ngOnInit = function () {
        this.getAccountHealth();
    };
    StocksComponent.prototype.ngAfterViewInit = function () {
        this.getStocks();
    };
    StocksComponent.prototype.getStocks = function () {
        this.stocksService.getStocks().pipe();
        // TODO fix this
        // this.stocksService.getStocks()
        //    .mergeMap((stocks : Array<Stock>) => {
        //      return Observable.forkJoin(
        //        stocks.map((stock : Stock) => {
        //         this.stocksService.getQuote(stock.symbol).subscribe( (quote: Quote) => stock.quote = quote.latestPrice );
        //         return Observable.of(stock);
        //        }
        //      ));
        //    }).subscribe(stocks => {
        //      this.dataSource.data = stocks;
        //      //this.stocks = stocks;
        //    });    
    };
    StocksComponent.prototype.getQuote = function (symbol) {
        return this.stocksService.getQuote(symbol);
    };
    StocksComponent.prototype.getAccountHealth = function () {
        var _this = this;
        this.stocksService.getAccountHealth()
            .subscribe(function (accountHealth) {
            //console.log("Acc " + accountHealth.gain)
            _this.accountHealth = accountHealth;
        });
    };
    StocksComponent.prototype.add = function (symbol, purchasePrice, quantity) {
        var _this = this;
        symbol = symbol.trim();
        if (!symbol || !purchasePrice || !quantity) {
            return;
        }
        this.stocksService.addStock({ symbol: symbol, purchasePrice: purchasePrice, quantity: quantity })
            .subscribe(function (stock) {
            //this.stocks.push(stock);
            _this.dataSource.data.push(stock);
            _this.dataSource._updateChangeSubscription();
        });
    };
    StocksComponent.prototype.delete = function (stock) {
        this.dataSource.data = this.dataSource.data.filter(function (h) { return h !== stock; });
        this.stocksService.deleteStock(stock).subscribe();
        this.dataSource._updateChangeSubscription();
    };
    StocksComponent.prototype.onSelect = function (stock) {
        console.log("Selected " + stock.symbol);
        this.selectedStock = stock;
    };
    /** Whether the number of selected elements matches the total number of rows. */
    StocksComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    StocksComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    StocksComponent.prototype.printSelection = function () {
        console.log(this.selection);
    };
    StocksComponent.prototype.deleteSelected = function () {
        var _this = this;
        this.selection.selected.forEach(function (stock) { return _this.delete(stock); });
    };
    StocksComponent.prototype.chartSelected = function () {
        //this.selection.selected.forEach( stock => this.delete(stock) )
        var compare = [];
        this.selection.selected.forEach(function (stock) { return compare.push(stock.symbol); });
        console.log("Charting " + compare);
        this.router.navigate(['/chart', { compare: compare }]);
    };
    StocksComponent.prototype.detailSelected = function () {
        this.router.navigate(['/detail/' + this.selection.selected[0].symbol]);
    };
    StocksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stocks',
            template: __webpack_require__(/*! ./stocks.component.html */ "./src/app/stocks/stocks.component.html"),
            styles: [__webpack_require__(/*! ./stocks.component.css */ "./src/app/stocks/stocks.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _stocks_service__WEBPACK_IMPORTED_MODULE_1__["StocksService"]])
    ], StocksComponent);
    return StocksComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kevinniemann/git/reactive-stocks/frontend/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!***********************!*\
  !*** vertx (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map