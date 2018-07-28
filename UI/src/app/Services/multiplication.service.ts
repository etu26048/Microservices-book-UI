import {Multiplication} from '../Model/multiplication';
import {MultiplicationResultAttempt} from '../Model/multiplicationResultAttempt';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class MultiplicationService {

  private GET_URL = 'http://localhost:8080/multiplications/random';
  private POST_URL = 'http://localhost:8080/results';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) {}

  public getMultiplication(): Observable<Multiplication> {
    return this.http.get<Multiplication>(this.GET_URL);
  }

  public postMultiplication(resultAttempt: MultiplicationResultAttempt) {
    this.http.post<MultiplicationResultAttempt>(this.POST_URL, resultAttempt, this.httpOptions);
  }

}
