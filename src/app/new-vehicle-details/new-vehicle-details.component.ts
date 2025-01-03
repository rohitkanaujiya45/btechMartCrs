import { Component } from '@angular/core';

@Component({
  selector: 'app-new-vehicle-details',
  standalone: true,
  imports: [],
  templateUrl: './new-vehicle-details.component.html',
  styleUrl: './new-vehicle-details.component.scss'
})
export class NewVehicleDetailsComponent {
  currentSlide = 0;

  // Handles navigation to the next slide
  nextSlide() {
    const slides = document.querySelectorAll<HTMLImageElement>('#carSlider img');
    if (slides) {
      this.currentSlide = (this.currentSlide + 1) % slides.length;
      const slider = document.getElementById('carSlider') as HTMLElement;
      slider.style.transform = `translateX(-${this.currentSlide * 100}%)`;
    }
  }


  // faqs
  
   // Declare faqTitles but without initialization here. It will be populated in ngOnInit
   faqTitles!: NodeListOf<HTMLElement>; 

   constructor() { }
 
   ngOnInit(): void {
     // Now that the component is initialized, we can safely access the DOM
     this.faqTitles = document.querySelectorAll('.faq-title');
 
     // Add event listeners after the component is initialized
     this.faqTitles.forEach((title: HTMLElement) => {
       title.addEventListener('click', () => {
         title.classList.toggle('active');
         const content: HTMLElement | null = title.nextElementSibling as HTMLElement;
 
         if (content) {
           content.style.display = content.style.display === 'block' ? 'none' : 'block';
         }
       });
     });
   }
}
