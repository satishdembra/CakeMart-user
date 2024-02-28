import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChoclateComponent } from './home-choclate.component';

describe('HomeChoclateComponent', () => {
  let component: HomeChoclateComponent;
  let fixture: ComponentFixture<HomeChoclateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeChoclateComponent]
    });
    fixture = TestBed.createComponent(HomeChoclateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
