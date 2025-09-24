import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJsOperatorsPage } from './rx-js-operators-page.component';

describe('RxJsWithoutOperatorsPage', () => {
  let component: RxJsOperatorsPage;
  let fixture: ComponentFixture<RxJsOperatorsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxJsOperatorsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxJsOperatorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
