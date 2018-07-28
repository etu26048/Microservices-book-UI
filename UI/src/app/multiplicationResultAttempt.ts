import {Multiplication} from './multiplication';
import {User} from './user';

export class MultiplicationResultAttempt {

  id: number;
  multiplication: Multiplication;
  resultAttempt: number;
  correct: boolean;
  user: User;

  constructor() {

  }
}