import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsBlock } from './cards-block';

describe('CardsBlock', () => {
  let component: CardsBlock;
  let fixture: ComponentFixture<CardsBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsBlock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsBlock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
