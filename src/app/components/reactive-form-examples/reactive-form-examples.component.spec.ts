import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormExamplesComponent } from './reactive-form-examples.component';

describe('ReactiveFormExamplesComponent', () => {
  let component: ReactiveFormExamplesComponent;
  let fixture: ComponentFixture<ReactiveFormExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormExamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
