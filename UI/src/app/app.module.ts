import {MultiplicationService} from './Services/multiplication.service';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {MultplicationpanelComponent} from './Components/multplicationpanel/multplicationpanel.component';
import {LeaderboardpanelComponent} from './Components/leaderboardpanel/leaderboardpanel.component';
import {SelfrankingComponent} from './Components/selfranking/selfranking.component';
import {HttpClientModule} from '@angular/common/http';
import {MutliplicationformComponent} from './Components/multplicationpanel/forms/mutliplicationform/mutliplicationform.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MultplicationpanelComponent,
    LeaderboardpanelComponent,
    SelfrankingComponent,
    MutliplicationformComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MultiplicationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
