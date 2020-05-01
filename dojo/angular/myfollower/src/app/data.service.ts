import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable ,throwError} from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppError } from './app-error';
import { NotFoundError } from './not-found-error';





@Injectable(
  
)
export class DataService {
  constructor(@Inject(String) private urls : string , private httpClient: HttpClient) {}
 
  getAll(){
    return this.httpClient.get(this.urls)
    .pipe(map((response=> response)))
    .pipe(catchError( (error:Response)=>{
     return throwError(new AppError(error));    }))
  
  }
 
   
  
  Create(resource){
    return  this.httpClient.post(this.urls, JSON.stringify(resource))
    .pipe(map((response=> response)))
    .pipe(catchError((error:Response)=>{
    
     return throwError(new AppError(error))
  }))
   
  }
  update(resource){
    return  this.httpClient.put(this.urls+'/'+resource.id,JSON.stringify(resource))
    .pipe(map((response=> response)))
  }
  delete(id){
    return this.httpClient.delete(this.urls+'/'+ id)
    .pipe(map((response=> response)))
    .pipe(catchError((error:Response) =>{ 
      
  
        if (error.status === 404)   
              return throwError (new NotFoundError() ); 
        return throwError ( new AppError(error) );  
     })
    );


  }
 

}