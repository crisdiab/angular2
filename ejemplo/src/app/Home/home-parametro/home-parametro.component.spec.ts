import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeParametroComponent } from './home-parametro.component';

describe('HomeParametroComponent', () => {
  let component: HomeParametroComponent;
  let fixture: ComponentFixture<HomeParametroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeParametroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeParametroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
