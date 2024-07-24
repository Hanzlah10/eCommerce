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
    '../../../../assets/carousel/sale1.webp',
    '../../../../assets/carousel/sale2.webp',
    // '../../../../assets/carousel/sale3.webp',
    '../../../../assets/carousel/sale5.webp',
    '../../../../assets/carousel/sale4.webp',
  ];

  currentSlide = 0;
  slideInterval: any;

  ngOnInit() {
    this.startSlideShow();
  }

  startSlideShow() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  nextSlide() {
    if (this.currentSlide < this.slides.length - 1) {
      this.currentSlide++;
    } else {
      this.currentSlide = 0; // Loop back to the first slide
    }
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    } else {
      this.currentSlide = this.slides.length - 1; // Loop to the last slide
    }
  }

  selectSlide(index: number) {
    this.currentSlide = index;
  }

  ngOnDestroy() {
    clearInterval(this.slideInterval);
  }

  // getTransformValue() {
  //   const slideWidth = 100 / this.slides.length; // Assuming equal width slides
  //   return `translateX(-${this.currentSlide * slideWidth}%)`;
  // }
}

