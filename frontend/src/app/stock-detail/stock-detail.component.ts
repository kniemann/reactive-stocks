import { Component, OnInit, Input } from '@angular/core';
import { Stock } from '../model/stock';
import { Quote } from '../model/quote';
import { StocksService } from "../stocks.service";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.css']
})
export class StockDetailComponent implements OnInit {

  @Input() stock: Stock;
  quote: Quote;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private stocksService: StocksService
  ) { }

  ngOnInit() {
    this.fetchQuote();
  }
  fetchQuote() {
    const symbol = this.route.snapshot.paramMap.get('symbol');
    console.log("Fetching quote: " + symbol)
    this.stocksService.getQuote(symbol)
      .subscribe(quote => this.quote = quote);
  }




}
