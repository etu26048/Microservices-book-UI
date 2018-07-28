import {Component, OnInit} from '@angular/core';
import {Multiplication} from '../../Model/multiplication';
import {MultiplicationResultAttempt} from '../../Model/multiplicationResultAttempt';
import {MultiplicationserviceService} from '../../Services/multiplicationservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-multplicationpanel',
  templateUrl: './multplicationpanel.component.html',
  styleUrls: ['./multplicationpanel.component.css']
})
export class MultplicationpanelComponent implements OnInit {

  multiplication: Multiplication;

  multiplicationResultAttempt = new MultiplicationResultAttempt();

  constructor(private service: MultiplicationserviceService) {}

  ngOnInit() {
    
  }

  public getMultiplication (): Observable<Multiplication> {
    return this.service.getMultiplication();
  }

}
