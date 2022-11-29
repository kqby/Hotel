import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelmenuComponent } from './hotelmenu.component';

describe('HotelmenuComponent', () => {
  let component: HotelmenuComponent;
  let fixture: ComponentFixture<HotelmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
