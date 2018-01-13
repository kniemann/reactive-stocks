import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Stock } from '../stock';
import { StocksService} from '../stocks.service';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { Quote } from '../quote';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { mergeMap } from 'rxjs/operators/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/forkJoin'
import 'rxjs/add/observable/of';
import { Router } from '@angular/router';


@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})

export class StocksComponent implements OnInit, AfterViewInit {
  stocks: Stock[];
  constructor(
    private router: Router,
    private stocksService: StocksService) { }
  title = 'My stocks:';
  selectedStock : Stock;
  displayedColumns = ['select', 'symbol', 'purchasePrice', 'quantity', 'quote'];
  dataSource = new MatTableDataSource<Stock>();
  selection = new SelectionModel<Stock>(true, []);

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.getStocks();
  }


  getStocks(): void {
    this.stocksService.getStocks()
       .mergeMap((stocks : Array<Stock>) => {
         return Observable.forkJoin(
           stocks.map((stock : Stock) => {
            this.stocksService.getQuote(stock.symbol).subscribe( (quote: Quote) => stock.quote = quote.latestPrice );
            return Observable.of(stock);
           }
         ));
       }).subscribe(stocks => {
         this.dataSource.data = stocks;
         //this.stocks = stocks;
       });    
  }


  getQuote(symbol): Observable<Quote> {
    return this.stocksService.getQuote(symbol);
  }


  add(symbol: string, purchasePrice: number, quantity: number): void {
    symbol = symbol.trim();
    if (!symbol || !purchasePrice || !quantity) { return; }
    this.stocksService.addStock({ symbol, purchasePrice, quantity } as Stock)
      .subscribe(stock => {
        //this.stocks.push(stock);
        this.dataSource.data.push(stock);
        this.dataSource._updateChangeSubscription();
    });
  }

  delete(stock: Stock): void {
    this.dataSource.data = this.dataSource.data.filter(h => h !== stock);
    this.stocksService.deleteStock(stock).subscribe();
    this.dataSource._updateChangeSubscription();
  }

  onSelect(stock: Stock) {
    console.log("Selected " + stock.symbol)
    this.selectedStock = stock;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  printSelection() : void {
    console.log(this.selection);
  }
  deleteSelected(): void {
    this.selection.selected.forEach( stock => this.delete(stock) );
  }
  chartSelected(): void {
    //this.selection.selected.forEach( stock => this.delete(stock) )
    let compare: String[] = [];
    this.selection.selected.forEach(stock => compare.push(stock.symbol));
    console.log("Charting " + compare);
    this.router.navigate(['/chart', { compare }]);

  }
  detailSelected(): void {
    this.router.navigate(['/detail/' + this.selection.selected[0].symbol]);
  }
}
