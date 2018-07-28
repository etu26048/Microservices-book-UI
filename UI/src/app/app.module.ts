import {MultiplicationserviceService} from './Services/multiplicationservice.service';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {MultplicationpanelComponent} from './Components/multplicationpanel/multplicationpanel.component';
import {LeaderboardpanelComponent} from './Components/leaderboardpanel/leaderboardpanel.component';
import {SelfrankingComponent} from './Components/selfranking/selfranking.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MultplicationpanelComponent,
    LeaderboardpanelComponent,
    SelfrankingComponent,
    MultiplicationserviceService
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
