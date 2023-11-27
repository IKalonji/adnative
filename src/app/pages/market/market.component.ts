import { Component, OnInit } from '@angular/core';
import { MarketAsset } from 'src/app/models/market-asset';
import { MarketAssets } from 'src/app/models/market-assets';
import { Router } from '@angular/router';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

  assetsList: MarketAsset[] = MarketAssets;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openAsset(asset: MarketAsset){
    this.router.navigate([])
  }

}
