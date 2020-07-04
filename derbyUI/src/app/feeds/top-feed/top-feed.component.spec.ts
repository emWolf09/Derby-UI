import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFeedComponent } from './top-feed.component';

describe('TopFeedComponent', () => {
  let component: TopFeedComponent;
  let fixture: ComponentFixture<TopFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
