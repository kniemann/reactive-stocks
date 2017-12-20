import { AfterViewInit, Component, OnInit} from '@angular/core';
import { Stock } from '../stock';
import { StocksService} from '../stocks.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})

export class StocksComponent implements OnInit, AfterViewInit {
  stocks: Stock[];
  constructor(private stocksService: StocksService) { }
  title = 'My stocks:';
  selectedStock : Stock;
  displayedColumns = ['symbol', 'purchasePrice', 'quantity'];
  dataSource = new MatTableDataSource<Stock>();

  ngOnInit() {
    this.getStocks();
  }
  ngAfterViewInit() {
    this.stocksService.getStocks()
      .subscribe(stocks => this.dataSource.data = stocks);
  }



  getStocks(): void {
    this.stocksService.getStocks()
    .subscribe(stocks => this.stocks = stocks);
  }

  add(symbol: string, purchasePrice: number, quantity: number): void {
    symbol = symbol.trim();
    if (!symbol || !purchasePrice || !quantity) { return; }
    this.stocksService.addStock({ symbol, purchasePrice, quantity } as Stock)
      .subscribe(stock => {
        this.stocks.push(stock);
        this.dataSource.data = this.stocks;
      });
  }

  delete(stock: Stock): void {
    this.stocks = this.stocks.filter(h => h !== stock);
    this.dataSource.data = this.stocks;
    this.stocksService.deleteStock(stock).subscribe();
  }

  onSelect(stock: Stock) {
    console.log("Selected " + stock.symbol)
    this.selectedStock = stock;
  }
}
