import { Component, OnInit } from '@angular/core';
import { DigimonApiService } from '../digimon-api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}

