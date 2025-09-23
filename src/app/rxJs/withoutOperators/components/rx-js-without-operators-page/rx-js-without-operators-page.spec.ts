import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJsWithoutOperatorsPage } from './rx-js-without-operators-page';

describe('RxJsWithoutOperatorsPage', () => {
  let component: RxJsWithoutOperatorsPage;
  let fixture: ComponentFixture<RxJsWithoutOperatorsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxJsWithoutOperatorsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxJsWithoutOperatorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
