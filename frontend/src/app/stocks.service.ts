import { Injectable } from '@angular/core';
import { Stock } from './model/stock';
import { StockDaily } from './model/stock-daily';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable ,  of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Quote } from './model/quote'
import { AccountHealth } from './account-health';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class StocksService {
  private stocksUrl = 'http://localhost:8080/stocks';
  constructor(private http: HttpClient) { }

  getStocks (): Observable<Stock[]> {
    return this.http.get<Stock[]>(this.stocksUrl)
  }

  addStock (stock: Stock): Observable<Stock> {
    this.log(`Adding stock ${stock.symbol} ${stock.purchasePrice} ${stock.quantity}`)
    return this.http.post<Stock>(this.stocksUrl, stock, httpOptions).pipe(
      tap((stock: Stock) => this.log(`added stock w/ symbol=${stock.symbol}`)),
      catchError(this.handleError<Stock>('addStock'))
    );
  }

  deleteStock (stock: Stock | number): Observable<Stock> {
    const id = typeof stock === 'number' ? stock : stock.symbol;
    const url = `${this.stocksUrl}/${id}`;

    return this.http.delete<Stock>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted stock id=${id}`)),
      catchError(this.handleError<Stock>('deleteStock'))
    );
  }

  getQuote (symbol: String): Observable<Quote> {
    console.log("Stock service getting quote: " + symbol)
    return this.http.get<Quote>(this.stocksUrl + "/quote/" + symbol)
  }
    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a StockService message with the MessageService */
  private log(message: string) {
    console.log('Stock Service: ' + message);
  }

  getStockDaily(symbol: String) : Observable<StockDaily[]> {
    return this.http.get<StockDaily[]>(this.stocksUrl + "/daily/" + symbol)
  }

  getAccountHealth() : Observable<AccountHealth> {
    console.log("Getting account health");
    return this.http.get<AccountHealth>(this.stocksUrl + "/account/health");
  }
}
