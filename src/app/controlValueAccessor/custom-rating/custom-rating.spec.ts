import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomRating } from './custom-rating';

describe('CustomRating', () => {
  let component: CustomRating;
  let fixture: ComponentFixture<CustomRating>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomRating]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomRating);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
