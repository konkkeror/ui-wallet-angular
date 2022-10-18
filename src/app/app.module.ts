import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreditcardComponent } from './components/creditcard/creditcard.component';
import { ServiceCategoryComponent } from './components/service-category/service-category.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CreditcardComponent,
    ServiceCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
