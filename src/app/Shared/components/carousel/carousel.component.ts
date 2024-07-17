import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  slides = [
    '../../../../assets/images/sale3.jpg',
    '../../../../assets/images/sale2.jpg',
    '../../../../assets/images/sale3.jpg',
    '../../../../assets/images/sale4.jpg',
    '../../../../assets/images/sale5.jpg'
  ];

  currentSlide = 0;
  slideInterval: any;

  ngOnInit() {
    this.startSlideShow();
  }

  startSlideShow() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 3500);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  selectSlide(index: number) {
    this.currentSlide = index;
  }

  ngOnDestroy() {
    clearInterval(this.slideInterval);
  }
}

