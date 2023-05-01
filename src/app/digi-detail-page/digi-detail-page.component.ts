import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-digi-detail-page',
  templateUrl: './digi-detail-page.component.html',
  styleUrls: ['./digi-detail-page.component.scss']
})
export class DigiDetailPageComponent {

  constructor (
    private route: ActivatedRoute,
    // private digi: HeroService,
    private location: Location
  ) {}


  // getHero(): void {
  //   const id = Number(this.route.snapshot.paramMap.get('id'));
  //   this.heroService.getHero(id)
  //     .subscribe(hero => this.hero = hero);
  // }

}
