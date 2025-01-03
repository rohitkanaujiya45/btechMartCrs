import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel-component',
  standalone: true,
  imports: [CommonModule,CarouselModule],
   
  templateUrl: './carousel-component.component.html',
  styleUrls: ['./carousel-component.component.scss']
})

export class ExampleComponent {
  customOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      navSpeed: 700,
      navText: ['', ''],
      margin:10,
      responsive: {
        0: {
          items: 2
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: 4
        }
      },
      nav: false
      
    }
  slides = [
    { img: "https://5.imimg.com/data5/SELLER/Default/2023/6/319245589/XL/HQ/XX/82413696/jcb-backhoe-loader-250x250.png", name: "Backhoe Loader" },
    { img: "https://5.imimg.com/data5/SELLER/Default/2023/6/319245589/XL/HQ/XX/82413696/jcb-backhoe-loader-250x250.png", name: "Wheel Loader" },
    { img: "https://5.imimg.com/data5/SELLER/Default/2023/6/319245589/XL/HQ/XX/82413696/jcb-backhoe-loader-250x250.png", name: "Excavator" },
    { img: "https://5.imimg.com/data5/SELLER/Default/2023/6/319245589/XL/HQ/XX/82413696/jcb-backhoe-loader-250x250.png", name: "Transit Mixer" }
  ];
  // slideConfig = { "slidesToShow": 4, "slidesToScroll": 1 };
  
}