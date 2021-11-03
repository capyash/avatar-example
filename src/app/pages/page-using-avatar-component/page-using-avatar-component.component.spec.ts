import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUsingAvatarComponent } from './page-using-avatar-component.component';

describe('PageUsingAvatarComponentComponent', () => {
  let component: PageUsingAvatarComponent;
  let fixture: ComponentFixture<PageUsingAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageUsingAvatarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUsingAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
