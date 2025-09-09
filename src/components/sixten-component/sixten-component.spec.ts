import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixtenComponent } from './sixten-component';

describe('SixtenComponent', () => {
  let component: SixtenComponent;
  let fixture: ComponentFixture<SixtenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SixtenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SixtenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
