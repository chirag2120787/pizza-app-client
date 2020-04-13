import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class ServerService {

  apiURL = 'https://nameless-stream-09863.herokuapp.com';

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  createOrder(orderData): Observable<any> {

    try {
      return this.http.post<any>(this.apiURL + '/orders', JSON.stringify(orderData), this.httpOptions);

    } catch (error) {
      this.handleError(error);
    }
  }


  // Error handling
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
      alert(errorMessage)
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      alert(errorMessage)
    }
    return throwError(errorMessage);
  }

}