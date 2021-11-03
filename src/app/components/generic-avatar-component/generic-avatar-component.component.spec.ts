import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericAvatarComponentComponent } from './generic-avatar-component.component';

describe('GenericAvatarComponentComponent', () => {
  let component: GenericAvatarComponentComponent;
  let fixture: ComponentFixture<GenericAvatarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericAvatarComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericAvatarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
