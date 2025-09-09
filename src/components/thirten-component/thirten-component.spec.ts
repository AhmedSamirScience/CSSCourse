import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirtenComponent } from './thirten-component';

describe('ThirtenComponent', () => {
  let component: ThirtenComponent;
  let fixture: ComponentFixture<ThirtenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirtenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirtenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
