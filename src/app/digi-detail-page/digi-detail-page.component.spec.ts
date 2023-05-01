import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigiDetailPageComponent } from './digi-detail-page.component';

describe('DigiDetailPageComponent', () => {
  let component: DigiDetailPageComponent;
  let fixture: ComponentFixture<DigiDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigiDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigiDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
