import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { StocksService } from '../stocks.service';
import { Stock } from '../stock';
import { StockDaily } from '../stock-daily';
import { Observable } from 'rxjs/Observable';
import 'plotly.js/lib/core'

@Component({
  selector: 'app-stock-charts',
  templateUrl: './stock-charts.component.html',
  styleUrls: ['./stock-charts.component.css']
})
export class StockChartsComponent implements OnInit {

  stockMap : Map<String, StockDaily[]> = new Map<String, StockDaily[]>();
  stock: Observable<StockDaily[]>;
  date: Date[] = [];
  price: number[] = [];
  @ViewChild('chart') el: ElementRef;

  constructor(  
    private route: ActivatedRoute,
    private router: Router,
    private stocksService: StocksService
  ) {
    
  }

  ngOnInit() {
    // this.route.paramMap
    //   .map((params: ParamMap) => {
    //       var stocks = params.getAll('stocks');
    //       stocks.forEach(stock =>
    //         this.stocksService.getStockDaily(stock).subscribe( stockDaily =>
    //           this.stockMap.set(stock, stockDaily)
    //         ));
    //   })



      //console.log(this.stockMap.get("EXPD")[0].open);
      this.stock = this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.stocksService.getStockDaily(params.getAll("compare")[0]));
      
      this.stock.subscribe(stock => {
        
        console.log("Data = " + stock[0].date)
        stock.forEach( stock => {
          var dateTime = new Date(stock.date);
          //console.log("Datetime = " + dateTime)
          this.date.push(dateTime)
          this.price.push(stock.close)
        })
        this.createGraph();
      })
      
  }

  createGraph() : void {
    const element = this.el.nativeElement
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
  
  }
}
