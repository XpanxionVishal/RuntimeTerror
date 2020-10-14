import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAccomodationComponent } from './find-accomodation.component';

describe('FindAccomodationComponent', () => {
  let component: FindAccomodationComponent;
  let fixture: ComponentFixture<FindAccomodationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindAccomodationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAccomodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
