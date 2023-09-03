import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DigimonApiService } from '../digimon-api.service';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { Location } from '@angular/common';
import { DigiDetails } from '../digi-details';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-digi-detail-page',
  templateUrl: './digi-detail-page.component.html',
  styleUrls: ['./digi-detail-page.component.scss']
})
export class DigiDetailPageComponent {
  digi: DigiDetails | undefined;
  language = 'en_us'
  digiDescription: string | undefined;
  @ViewChild('DialogElement', { static: false }) divDialogElement: ElementRef | undefined;



  constructor(
    private route: ActivatedRoute,
    private digimonService: DigimonApiService,
    private location: Location,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getHero();
  }


  openDialog(itemData: object) {
    this.dialog.open(DialogBoxComponent, itemData);
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.digimonService.getDigiDude(id)
      .subscribe((digi) => {
        this.digi = digi;
        console.log(this.digi)
        this.digiDescription = this.digi?.descriptions?.[0]?.description;

      });
  }

  changeLanguage(language: string) {
    this.language = language;
    this.digiDescription = this.digi?.descriptions?.find((description) => description.language === language)?.description;
  }

  goBack(): void {
    this.location.back();
  }


}
