import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sentinel-loading',
  templateUrl: './sentinel-loading.component.html',
  styleUrls: ['./sentinel-loading.component.css']
})
export class SentinelLoadingComponent {

  @Output() loadNext = new EventEmitter<boolean>();

  ngOnInit() {
    let observer: IntersectionObserver = new IntersectionObserver((entries) => {
      if(entries.some((entry) => entry.isIntersecting)) {
        this.loadNext.emit();
      }
    });
    observer.observe(document.querySelector('#sentinel') as HTMLElement);
  }
}
