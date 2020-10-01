import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiattoComponent } from './piatto.component';

describe('PiattoComponent', () => {
  let component: PiattoComponent;
  let fixture: ComponentFixture<PiattoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiattoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiattoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
