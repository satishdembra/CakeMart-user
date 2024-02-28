import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBlueComponent } from './home-blue.component';

describe('HomeBlueComponent', () => {
  let component: HomeBlueComponent;
  let fixture: ComponentFixture<HomeBlueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeBlueComponent]
    });
    fixture = TestBed.createComponent(HomeBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
