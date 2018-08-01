import {HttpHeaders} from '@angular/common/http';

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};
export const LOCALHOST = 'http://localhost:8080';