import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCountDown } from './custom-count-down';

describe('CustomCountDown', () => {
  let component: CustomCountDown;
  let fixture: ComponentFixture<CustomCountDown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomCountDown]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomCountDown);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
