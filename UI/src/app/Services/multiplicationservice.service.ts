import { Multiplication } from '../Model/multiplication';
import {Injectable} from '@angular/core';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MultiplicationserviceService {

  private URL = 'http://localhost:8080/multiplications/random';

  constructor(private http: HttpClient) {}

  private log(message: String) {

  }

  public getMultiplication() : Observable<Multiplication> {
    return this.http.get<Multiplication>(this.URL);
  }

}
