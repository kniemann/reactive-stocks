import { BrowserModule } from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { MatTableModule} from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AppComponent } from './app.component';
import { StockDetailComponent } from './stock-detail/stock-detail.component';
import { StocksComponent } from './stocks/stocks.component';
import { AppRoutingModule } from './app-routing.module';
import { StocksService } from './stocks.service';
import { StockChartsComponent } from './stock-charts/stock-charts.component';

@NgModule({
  declarations: [
    AppComponent,
    StockDetailComponent,
    StocksComponent,
    StockChartsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatCheckboxModule,
    
  ],
  providers: [StocksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
