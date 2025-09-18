import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlValueAccessorPage } from './control-value-accessor-page';

describe('ControlValueAccessorPage', () => {
  let component: ControlValueAccessorPage;
  let fixture: ComponentFixture<ControlValueAccessorPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlValueAccessorPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlValueAccessorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
