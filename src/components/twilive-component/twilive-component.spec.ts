import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwiliveComponent } from './twilive-component';

describe('TwiliveComponent', () => {
  let component: TwiliveComponent;
  let fixture: ComponentFixture<TwiliveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwiliveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwiliveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
