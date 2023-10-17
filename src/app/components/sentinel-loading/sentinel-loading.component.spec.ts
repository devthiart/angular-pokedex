import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentinelLoadingComponent } from './sentinel-loading.component';

describe('SentinelLoadingComponent', () => {
  let component: SentinelLoadingComponent;
  let fixture: ComponentFixture<SentinelLoadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SentinelLoadingComponent]
    });
    fixture = TestBed.createComponent(SentinelLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
