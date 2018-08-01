import {Multiplication} from './multiplication';
import {User} from './user';

export class MultiplicationResultAttempt {


  constructor(
    private id: number,
    private multiplication?: Multiplication,
    private resultAttempt?: number,
    private correct?: boolean,
    private user?: User) {}

}