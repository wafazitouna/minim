import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSupportComponent } from './modal-support.component';

describe('ModalSupportComponent', () => {
  let component: ModalSupportComponent;
  let fixture: ComponentFixture<ModalSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
