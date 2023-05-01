import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigiPageComponent } from './digi-page/digi-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DigiDetailPageComponent } from './digi-detail-page/digi-detail-page.component';
import { DigiDetailPageGuardGuard } from './digi-detail-page/digi-detail-page-guard.guard';
import { DigiErrorPageComponent } from './digi-error-page/digi-error-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'digimon', component: DigiPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'digimon/:id', component: DigiDetailPageComponent, canActivate: [DigiDetailPageGuardGuard] },
  { path: 'digiError', component: DigiErrorPageComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})

export class AppRoutingModule { }
