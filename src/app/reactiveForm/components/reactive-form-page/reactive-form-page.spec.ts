import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormPage } from './reactive-form-page';

describe('ReactiveFormPage', () => {
  let component: ReactiveFormPage;
  let fixture: ComponentFixture<ReactiveFormPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
