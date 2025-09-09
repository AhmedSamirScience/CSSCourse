import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiftenComponent } from './fiften-component';

describe('FiftenComponent', () => {
  let component: FiftenComponent;
  let fixture: ComponentFixture<FiftenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiftenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiftenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
