import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fullname } from './fullname';

describe('Fullname', () => {
  let component: Fullname;
  let fixture: ComponentFixture<Fullname>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fullname]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fullname);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
