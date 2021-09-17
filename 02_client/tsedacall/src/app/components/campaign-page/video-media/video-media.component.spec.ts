import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoMediaComponent } from './video-media.component';

describe('VideoMediaComponent', () => {
  let component: VideoMediaComponent;
  let fixture: ComponentFixture<VideoMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
