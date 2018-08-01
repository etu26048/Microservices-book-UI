import {httpOptions, LOCALHOST} from '../Model/Const/WebConfiguration';
import {Multiplication} from '../Model/multiplication';
import {MultiplicationResultAttempt} from '../Model/multiplicationResultAttempt';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class MultiplicationService {

  constructor(private http: HttpClient) {}

  public getMultiplication(): Observable<Multiplication> {
    return this.http.get<Multiplication>(LOCALHOST + '/multiplications/random');
  }

  public postMultiplication(resultAttempt: MultiplicationResultAttempt) {
    this.http.post<MultiplicationResultAttempt>(LOCALHOST + '/results', resultAttempt, httpOptions);
  }

}
