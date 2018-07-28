import {Component, OnInit} from '@angular/core';
import {Multiplication} from '../../Model/multiplication';
import {MultiplicationResultAttempt} from '../../Model/multiplicationResultAttempt';
import {MultiplicationService} from '../../Services/multiplication.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-multplicationpanel',
  templateUrl: './multplicationpanel.component.html',
  styleUrls: ['./multplicationpanel.component.css']
})
export class MultplicationpanelComponent implements OnInit {

  multiplication: Multiplication;

  multiplicationResultAttempt = new MultiplicationResultAttempt();

  constructor(private service: MultiplicationService) {}

  ngOnInit() {
    this.getMultiplication();
  }

  getMultiplication(): void {
    this.service.getMultiplication().subscribe(data => this.multiplication = data);
  }

}
