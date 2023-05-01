import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigiErrorPageComponent } from './digi-error-page.component';

describe('DigiErrorPageComponent', () => {
  let component: DigiErrorPageComponent;
  let fixture: ComponentFixture<DigiErrorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigiErrorPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigiErrorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
