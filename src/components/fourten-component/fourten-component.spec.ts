import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourtenComponent } from './fourten-component';

describe('FourtenComponent', () => {
  let component: FourtenComponent;
  let fixture: ComponentFixture<FourtenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FourtenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourtenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
