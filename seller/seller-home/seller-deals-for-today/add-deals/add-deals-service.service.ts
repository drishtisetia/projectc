import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { deals } from '../../../../shared/models/deals';
import { environment } from '../../../../../environments/environment';
import { catchError } from 'rxjs/internal/operators/catchError';


@Injectable({
  providedIn: 'root'
})

export class AddDealsServiceService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }


  getProductsNotInDeal(loggedInSellerEmailId: string): Observable<any>
  {
    const url="http://localhost:3333/EKart_Server/sellerProduct-api/getProductBySellerEmailId/"+loggedInSellerEmailId;
    return this.http.get<any>(url).pipe(catchError(this.handleError));
  }

  addProductToDeal(productToBeAddedInDeal: deals) : Observable<any> {
    //console.log(data);
    return <Observable<any>> this.http.post("http://localhost:3333/EKart_Server/deals-api/addProductToDeal",productToBeAddedInDeal) ;
  }


  adddeals(dealsToAdd: deals): Observable<deals>
  {
    const url=environment.dealsAPIUrl;
    return this.http.post<deals>(url, dealsToAdd).pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err)
    let errMsg: string = '';
    if (err.error instanceof Error) {
      errMsg = err.error.message;
      console.log(errMsg)
    }
    else if (typeof err.error === 'string') {
      errMsg = JSON.parse(err.error).errorMessage
    }
    else {
      if (err.status == 0) {
        errMsg = "A connection to back end can not be established.";
      } else {
        errMsg = err.error.message;
      }
    }
    return throwError(errMsg);
  }
}
