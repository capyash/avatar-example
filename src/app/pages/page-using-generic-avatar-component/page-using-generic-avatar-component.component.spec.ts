import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUsingGenericAvatarComponent } from './page-using-generic-avatar-component.component';

describe('PageUsingGenericAvatarComponentComponent', () => {
  let component: PageUsingGenericAvatarComponent;
  let fixture: ComponentFixture<PageUsingGenericAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageUsingGenericAvatarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUsingGenericAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
