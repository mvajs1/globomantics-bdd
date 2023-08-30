import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { ProductListComponent } from './product-list.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { IntegerValidatorDirective } from './shared/integer.directive';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart.component';
import { ConfigurationTableComponent } from './product-card.component';
import { CalculateTotalPrice } from './pipes/calculateTotalPrice';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CartComponent,
    ConfigurationTableComponent,
    CalculateTotalPrice,
    IntegerValidatorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
