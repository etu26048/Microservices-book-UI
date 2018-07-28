import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MultplicationpanelComponent } from './multplicationpanel/multplicationpanel.component';
import { LeaderboardpanelComponent } from './leaderboardpanel/leaderboardpanel.component';
import { SelfrankingComponent } from './selfranking/selfranking.component';


@NgModule({
  declarations: [
    AppComponent,
    MultplicationpanelComponent,
    LeaderboardpanelComponent,
    SelfrankingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
