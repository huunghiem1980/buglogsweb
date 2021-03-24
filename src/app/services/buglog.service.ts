import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Buglog } from "../buglog";
import { catchError, retry } from 'rxjs/operators';
import { Message } from '../message';

@Injectable({
  providedIn: 'root'
})
export class BuglogService {

  private logUrl = 'http://127.0.0.1:8000/api/logs/'

  getLogs(project: string = ""): Observable<Message> {
    let pathUrl = `${this.logUrl}`;
    if (project != "") {
      pathUrl = `${this.logUrl}${project}/`;
    }      
    
    return this.http.get<Message>(pathUrl)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  createLog(log:Buglog) :Observable<Message>{
    return this.http.post<Message>(this.logUrl,log)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  updateLog(log:Buglog) :Observable<Message>{
    return this.http.put<Message>(this.logUrl + log.id, log)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  deleteLog(id:number):Observable<Message> {
    return this.http.delete<Message>(this.logUrl + id)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }
  
    /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  constructor(private http:HttpClient) { }
}
