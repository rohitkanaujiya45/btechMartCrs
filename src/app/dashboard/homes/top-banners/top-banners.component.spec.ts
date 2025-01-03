import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBannersComponent } from './top-banners.component';

describe('TopBannersComponent', () => {
  let component: TopBannersComponent;
  let fixture: ComponentFixture<TopBannersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopBannersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopBannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
