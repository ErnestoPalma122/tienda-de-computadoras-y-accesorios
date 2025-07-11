import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Infoprod } from './infoprod';

describe('Infoprod', () => {
  let component: Infoprod;
  let fixture: ComponentFixture<Infoprod>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Infoprod]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Infoprod);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
