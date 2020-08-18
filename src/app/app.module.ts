import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";   
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { CandlestickChartComponent } from './components/candlestick-chart/candlestick-chart.component';
import { BmiComponent } from './components/bmi/bmi.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CandlestickChartComponent,
    BmiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
