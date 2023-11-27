import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MarketComponent } from './pages/market/market.component';
import { AssetComponent } from './pages/asset/asset.component';
import { BrandComponent } from './pages/brand/brand.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "market/:chain",
    component: MarketComponent
  },
  {
    path: "asset/:chain",
    component: AssetComponent
  },
  {
    path: "brand/:chain",
    component: BrandComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
