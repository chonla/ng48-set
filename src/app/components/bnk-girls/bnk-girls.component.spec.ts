import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkGirlsComponent } from './bnk-girls.component';

describe('BnkGirlsComponent', () => {
  let component: BnkGirlsComponent;
  let fixture: ComponentFixture<BnkGirlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnkGirlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkGirlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
