import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeventenComponent } from './seventen-component';

describe('SeventenComponent', () => {
  let component: SeventenComponent;
  let fixture: ComponentFixture<SeventenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeventenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeventenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
