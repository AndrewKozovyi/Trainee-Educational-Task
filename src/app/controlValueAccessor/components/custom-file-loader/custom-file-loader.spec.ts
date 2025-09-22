import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFIleLoader } from './custom-file-loader';

describe('CustomFIleLoader', () => {
  let component: CustomFIleLoader;
  let fixture: ComponentFixture<CustomFIleLoader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomFIleLoader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomFIleLoader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
