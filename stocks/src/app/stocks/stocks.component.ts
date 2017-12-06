import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock';
import { StocksService} from '../stocks.service';
import { StockDetailComponent } from '../stock-detail/stock-detail.component'

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  stocks: Stock[];
  constructor(private stocksService: StocksService) { }
  title = 'My stocks:';
  ngOnInit() {
    this.getStocks();
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
      });
  }

  delete(stock: Stock): void {
    this.stocks = this.stocks.filter(h => h !== stock);
    this.stocksService.deleteStock(stock).subscribe();
  }

}
