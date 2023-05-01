import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';
import { DigimonApiService } from '../digimon-api.service';
import { DigiDude } from '../digi-dude';

@Component({
  selector: 'app-api-content',
  templateUrl: './api-content.component.html',
  styleUrls: ['./api-content.component.scss']
})
export class ApiContentComponent implements OnInit {
  constructor(private http: HttpClient) { }
  title = 'api-angular';
  digimonArray?: any[] | void;
  showLoading = false;
  imageLoading = false;
  value = 'Clear me';
  classTest = "digiCardImage"
  digimonList: any[] = [];
  digiLength: number | undefined;
  noDigimon = false;
  pageSize: number | undefined;

  apiTest = new DigimonApiService(this.http);
  timeoutId?: ReturnType<typeof setTimeout> ;


  // grabData(page: number, pageSize: number){
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
  //       console.log(this.digimonArray);
  // 		});
  // }

  // @ViewChild('paginator') paginator: any;

  pageEvent(event: PageEvent) {
    // this.digimonArray = this.apiTest?.grabData(event.pageIndex, event.pageSize);
    this.apiTest?.getDigimonList(event.pageIndex, event.pageSize).subscribe(data => {this.digimonArray = data.content})
    console.log(document.documentElement.scrollHeight)
    console.log(document.documentElement.scrollTop)
  }

  keySearchFunc(item: string) {
    this.showLoading = true;
    this.digimonArray = [];

    const test = () => {this.searchDigiArray(item)}

    clearTimeout(this.timeoutId);
    
    this.timeoutId = setTimeout(test, 250);

  }



  searchDigiArray(item: string) {
    this.noDigimon = false;
    this.showLoading = true;
    this.digimonArray = [];
    console.log(item)
    // if(item )
    if(item == "") {
      console.log('empty')
      this.apiTest?.getDigimonList(0, 200).subscribe(data => {this.digimonArray = data.content; this.showLoading = false;})
      this.digiLength = 1422;
      this.pageSize = 200;
      return;
    }
    else {
      this.apiTest?.searchDigimonList(0, 200, item).subscribe(data => {this.digimonArray = data.content; this.digiLength = this.digimonArray?.length; this.showLoading = false; this.pageSize = this.digiLength; console.log(this.digiLength); if(this.digiLength == undefined) {this.noDigimon = true;}})
    }


    // if(this.digiLength == undefined) {
    //   console.log("AHH")
    //   this.noDigimon = true;
    // }
    // else {
    //   this.noDigimon = false;
    // }
  }

  ngOnInit() {
    this.apiTest?.getDigimonList(0, 200).subscribe(data => {this.digimonArray = data.content; this.showLoading = false;})
    this.digiLength = 1422;
    this.pageSize = 200;
  }


  changeEvent() {
    console.log('change');
  }
}
