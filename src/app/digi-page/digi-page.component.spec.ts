import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigiPageComponent } from './digi-page.component';

describe('DigiPageComponent', () => {
  let component: DigiPageComponent;
  let fixture: ComponentFixture<DigiPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigiPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
