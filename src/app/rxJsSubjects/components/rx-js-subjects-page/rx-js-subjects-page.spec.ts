import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJsSubjectsPage } from './rx-js-subjects-page';

describe('RxJsSubjectsPage', () => {
  let component: RxJsSubjectsPage;
  let fixture: ComponentFixture<RxJsSubjectsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxJsSubjectsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxJsSubjectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
