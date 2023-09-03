import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { DigiDude } from './digi-dude';
import { DigiDetails } from './digi-details';


@Injectable({
  providedIn: 'root'
})
export class DigimonApiService {
  constructor(private http: HttpClient) { }
  digiUrl = "https://www.digi-api.com/api/v1/digimon"

  // async getAllDigimon(){
  //   return await fetch(this.url)
  //   .then((res) => {res.json(); console.log(res)})
  // }


  title = 'api-angular';
  digimonArray?: any[];
  showLoading = false;
  imageLoading = false;
  value = 'Clear me';

  //   getData(page: number, pageSize: number): Observable<DigiDude[]> {
  //     console.log("I'm here")
  //     return this.http.get<DigiDude[]>(`https://www.digi-api.com/api/v1/digimon?pageSize=${pageSize}&page=${page}`).pipe(
  //         // tap(data => console.log('All: ' + JSON.stringify(data))),
  //         tap(data => console.log("HEYJIFE")),
  //         // catchError(this.handleError)
  //     );
  // }

  // getDigimonList(pageSize: number, page: number){
  //   return this.http.get<any>(
  //     `https://www.digi-api.com/api/v1/digimon?pageSize=${pageSize}&page=${page}`
  //     )
  // }

  // grabData(page: number, pageSize: number){


  // getDigimonList(page: number, pageSize: number): Observable<any>{
  //   this.showLoading = true;
  //   // {page == undefined ? page = 0 : page = page}
  //   // {pageSize == undefined ? pageSize = 25 : pageSize = pageSize}
  //   this.http
  // 		.get<any>(`https://www.digi-api.com/api/v1/digimon?pageSize=${pageSize}&page=${page}`, {
  // 			// headers: headers
  // 		})
  // 		.subscribe(data => {
  //       this.showLoading = false;
  //       this.digimonArray = data.content;
  // 		});
  // }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }



  getDigiDude(id: number): Observable<DigiDetails> {
    const url = `${this.digiUrl}/${id}`;
    return this.http.get<DigiDetails>(url).pipe(
      tap(_ => console.log(`fetched hero id=${id}`))
      // catchError(this.handleError<DigiDude>(`getHero id=${id}`))
    );
  }

  getDigimonList(page: number, pageSize: number): Observable<any> {
    return this.http.get<any>(`https://www.digi-api.com/api/v1/digimon?pageSize=${pageSize}&page=${page}`)
  }

  searchDigimonList(page: number, pageSize: number, name: string): Observable<any> {
    return this.http.get<any>(`https://www.digi-api.com/api/v1/digimon?pageSize=${pageSize}&page=${page}&name=${name}`)
  }
}