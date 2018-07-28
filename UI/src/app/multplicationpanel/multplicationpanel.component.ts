import {Component, OnInit} from '@angular/core';
import {Multiplication} from '../multiplication';
import {MultiplicationResultAttempt} from '../multiplicationResultAttempt';

@Component({
  selector: 'app-multplicationpanel',
  templateUrl: './multplicationpanel.component.html',
  styleUrls: ['./multplicationpanel.component.css']
})
export class MultplicationpanelComponent implements OnInit {

  multiplication: Multiplication = {
    factorA: 89,
    factorB: 60
  };

  multiplicationResultAttempt = new MultiplicationResultAttempt();

  constructor() {}

  ngOnInit() {
  }

}
