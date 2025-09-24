import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomYearSelect } from './custom-year-select';

describe('CustomYearSelect', () => {
  let component: CustomYearSelect;
  let fixture: ComponentFixture<CustomYearSelect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomYearSelect]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomYearSelect);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
