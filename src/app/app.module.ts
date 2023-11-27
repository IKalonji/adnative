import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import { DividerModule } from 'primeng/divider';
import { ToastModule} from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CardModule } from 'primeng/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MarketComponent } from './pages/market/market.component';
import { AssetComponent } from './pages/asset/asset.component';
import { BrandComponent } from './pages/brand/brand.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MarketComponent,
    AssetComponent,
    BrandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    ToolbarModule,
    DividerModule,
    ToastModule,
    ConfirmDialogModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
