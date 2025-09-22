import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedDayAlert } from './finished-day-alert';

describe('FinishedDayAlert', () => {
  let component: FinishedDayAlert;
  let fixture: ComponentFixture<FinishedDayAlert>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinishedDayAlert]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinishedDayAlert);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
