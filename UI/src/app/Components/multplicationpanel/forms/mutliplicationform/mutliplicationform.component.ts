import {MultiplicationResultAttempt} from '../../../../Model/multiplicationResultAttempt';
import {MultiplicationService} from '../../../../Services/multiplication.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-mutliplicationform',
  templateUrl: './mutliplicationform.component.html',
  styleUrls: ['./mutliplicationform.component.css']
})
export class MutliplicationformComponent implements OnInit {

  multiplicationResultAttempt: MultiplicationResultAttempt = new MultiplicationResultAttempt(0);
  //How to get multiplication model ?
  //Create the user model ?

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log(this.multiplicationResultAttempt);
    this.postMultiplication(this.multiplicationResultAttempt);
  }

  constructor(private service: MultiplicationService) {}

  ngOnInit() {
  }

  postMultiplication(resultAttempt: MultiplicationResultAttempt): void {
    this.service.postMultiplication(resultAttempt);
  }

}
