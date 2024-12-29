import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrfMenuComponent } from './prf-menu.component';

describe('PrfMenuComponent', () => {
  let component: PrfMenuComponent;
  let fixture: ComponentFixture<PrfMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrfMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrfMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
