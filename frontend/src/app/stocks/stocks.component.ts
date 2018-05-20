import { AfterViewInit, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Stock } from '../model/stock';
import { AccountHealth } from '../account-health';
import { StocksService} from '../stocks.service';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { forkJoin, combineLatest, zip } from 'rxjs';
import { Quote } from '../model/quote';
import { mergeMap, concat, concatMap, combineAll, concatAll, mergeAll, switchMap, map } from 'rxjs/operators';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';



import { Router } from '@angular/router';
import { StockDaily } from '../model/stock-daily';
import { join } from 'path';


@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})

export class StocksComponent implements OnInit, AfterViewInit {
  stocks: Stock[];
  accountHealth: AccountHealth;
  constructor(
    private router: Router,
    private stocksService: StocksService,
    private changeDetectorRefs: ChangeDetectorRef
  
  ) { }
  title = 'My Stocks';
  selectedStock : Stock;
  displayedColumns = ['select', 'symbol', 'purchasePrice', 'quantity', 'quote'];
  dataSource = new MatTableDataSource<Stock>();
  selection = new SelectionModel<Stock>(true, []);

  ngOnInit() {
    this.getAccountHealth();
    this.getStocks();

  }
  ngAfterViewInit() {
    //this.getQuotes();
  }


  getStocks(): void {
    this.stocksService.getStocks().pipe(
       mergeMap((stocks : Stock[]) => {
          
          return forkJoin(
            stocks.map((stock : Stock) => {
              this.stocksService.getQuote(stock.symbol).subscribe( (quote: Quote) => stock.quote = quote.latestPrice );
              return of(stock);
            }) 
          )
       }),
      ).subscribe(stocks => {
         this.dataSource.data = stocks;
       }); 
  }

  getQuotes(): void {
    this.stocksService.getStocks().subscribe( 
      stocks => {
        stocks.forEach((stock: Stock) => {
          this.stocksService.getQuote(stock.symbol).subscribe( (quote: Quote) => {
            console.log(quote.symbol + " = " + quote.latestPrice)
            stock.quote = quote.latestPrice
            this.updateQuote(stock)
            console.log("Updating quote")
            this.dataSource.data.forEach(item => console.log(item))
            this.changeDetectorRefs.detectChanges() 
          })
        })
      }
    )
    
  }

  updateQuote(newStock: Stock){
    let updateStock = this.dataSource.data.find(stock => stock.symbol == newStock.symbol );

    let index = this.dataSource.data.indexOf(updateStock);


    this.dataSource.data[index] = newStock;

  }



  getQuote(symbol): Observable<Quote> {
    return this.stocksService.getQuote(symbol);
  }

  getAccountHealth(): void {
    this.stocksService.getAccountHealth()
    .subscribe( accountHealth => {
      //console.log("Acc " + accountHealth.gain)
      this.accountHealth = accountHealth; 
    });
  }


  add(symbol: string, purchasePrice: number, quantity: number): void {
    symbol = symbol.trim();
    if (!symbol || !purchasePrice || !quantity) { return; }
    this.stocksService.addStock({ symbol, purchasePrice, quantity } as Stock).pipe(
      mergeMap((stock : Stock) => { 
             this.stocksService.getQuote(stock.symbol).subscribe( (quote: Quote) => stock.quote = quote.latestPrice );
             return of(stock);
      })
     ).subscribe(stock => {
        this.dataSource.data.push(stock);
        this.dataSource._updateChangeSubscription();
    })
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
