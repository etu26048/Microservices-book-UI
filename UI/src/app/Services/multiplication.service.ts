import {Multiplication} from '../Model/multiplication';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class MultiplicationService {

  private URL = 'http://localhost:8080/multiplications/random';

  constructor(private http: HttpClient) {}

  public getMultiplication(): Observable<Multiplication> {
    return this.http.get<Multiplication>(this.URL);
  }

}
