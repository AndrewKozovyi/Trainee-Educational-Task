import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomComplexForm } from './custom-complex-form';

describe('CustomComplexForm', () => {
  let component: CustomComplexForm;
  let fixture: ComponentFixture<CustomComplexForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomComplexForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomComplexForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
