import { BrowserModule } from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { MatTableModule } from '@angular/material';

import { AppComponent } from './app.component';
import { StockDetailComponent } from './stock-detail/stock-detail.component';
import { StocksComponent } from './stocks/stocks.component';
import { AppRoutingModule } from './/app-routing.module';
import { StocksService } from './stocks.service';



@NgModule({
  declarations: [
    AppComponent,
    StockDetailComponent,
    StocksComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [StocksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
