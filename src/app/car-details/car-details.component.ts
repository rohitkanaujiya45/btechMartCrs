// // import { Component } from '@angular/core';

// // @Component({
// //   selector: 'app-car-details',
// //   standalone: true,
// //   imports: [],
// //   templateUrl: './car-details.component.html',
// //   styleUrl: './car-details.component.scss'
// // })
// // export class CarDetailsComponent {

// // }
// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-car-details',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './car-details.component.html',
//   styleUrls: ['./car-details.component.scss']
// })
// export class CarDetailsComponent {
//   // Property to manage the visibility of the social box
//   isSocialBoxVisible = false;

//   // Method to toggle the visibility of the social box
//   toggleSocialBox() {
//     this.isSocialBoxVisible = !this.isSocialBoxVisible;
//   }



//  toggleGallery(): void {
//     const gallery = document.getElementById('fullGallery') as HTMLElement;
    
//     if (gallery.style.display === 'none' || gallery.style.display === '') {
//       gallery.style.display = 'flex';
//     } else {
//       gallery.style.display = 'none';
//     }
//   }

  
  
// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-car-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent {
  // Property to manage the visibility of the social box
  isSocialBoxVisible = false;

  // Method to toggle the visibility of the social box
  toggleSocialBox() {
    this.isSocialBoxVisible = !this.isSocialBoxVisible;
  }

  // Method to toggle the gallery visibility
  toggleGallery(): void {
    const gallery = document.getElementById('fullGallery') as HTMLElement;
    
    if (gallery.style.display === 'none' || gallery.style.display === '') {
      gallery.style.display = 'flex';
    } else {
      gallery.style.display = 'none';
    }
  }

  // Variables for image slider functionality
  currentIndex: number = 0;
  images: NodeListOf<HTMLImageElement>;
  totalImages: number;
  slider: HTMLElement;
  nextButton: HTMLElement;

  constructor() {
    // Initialize image slider elements
    this.images = document.querySelectorAll('.slider img') as NodeListOf<HTMLImageElement>;
    this.totalImages = this.images.length;
    this.slider = document.getElementById('carSlider') as HTMLElement;
    this.nextButton = document.getElementById('nextButton') as HTMLElement;

    // Bind the event listener
    this.nextButton?.addEventListener('click', this.showNextImage.bind(this));
  }

  // Function to move to the next image
  showNextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.totalImages; // Loop back to the first image after the last one
    const offset: number = -this.currentIndex * 100; // Move to the next image
    this.slider.style.transform = `translateX(${offset}%)`;
  }
}
