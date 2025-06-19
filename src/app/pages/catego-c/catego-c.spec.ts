import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoC } from './catego-c';

describe('CategoC', () => {
  let component: CategoC;
  let fixture: ComponentFixture<CategoC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
