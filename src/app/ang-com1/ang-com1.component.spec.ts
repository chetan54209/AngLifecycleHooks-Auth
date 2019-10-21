import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngCom1Component } from './ang-com1.component';

describe('AngCom1Component', () => {
  let component: AngCom1Component;
  let fixture: ComponentFixture<AngCom1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngCom1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngCom1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
