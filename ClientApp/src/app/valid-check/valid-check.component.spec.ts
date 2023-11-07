import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidCheckComponent } from './valid-check.component';

describe('ValidCheckComponent', () => {
  let component: ValidCheckComponent;
  let fixture: ComponentFixture<ValidCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
