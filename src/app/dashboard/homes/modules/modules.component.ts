import { Component, OnDestroy, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'modules',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './modules.component.html',
  styleUrl: './modules.component.scss'
})
export class ModulesComponent implements OnInit, OnDestroy {
 brandsOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    margin:15,
    responsive: {
      0: {
        items: 2.3
      },
      400: {
        items: 3
      },
      740: {
        items: 6
      },
      940: {
        items: 8
      }
    },
    nav: false
    
  }
 brandsData:any = [
  {
    url:'../../../../assets/img/brands/bantly.png',
    name:''
  },
  {
    url:'../../../../assets/img/brands/ap.png',
    name:''
  },
  {
    url:'../../../../assets/img/brands/eagle.png',
    name:''
  },
  {
    url:'../../../../assets/img/brands/mercedes-benz-logos.webp',
    name:''
  },
  {
    url:'../../../../assets/img/brands/mg.jpg',
    name:''
  },
  {
    url:'../../../../assets/img/brands/porche.png',
    name:''
  },
  {
    url:'../../../../assets/img/brands/eagle.png',
    name:''
  },
  {
    url:'../../../../assets/img/brands/mercedes-benz-logos.webp',
    name:''
  },
  {
    url:'../../../../assets/img/brands/mg.jpg',
    name:''
  },
  {
    url:'../../../../assets/img/brands/porche.png',
    name:''
  },
 ]
categoryData:any = [
  {
    url:'../../../../assets/img/category/normal.jpg',
    name:''
  },
  {
    url:'../../../../assets/img/category/superCars.webp',
    name:''
  },
  {
    url:'../../../../assets/img/category/normalBike.png',
    name:''
  },
  {
    url:'../../../../assets/img/category/superBike.webp',
    name:''
  },
  {
    url:'../../../../assets/img/category/liteVehicles.webp',
    name:''
  },
  {
    url:'../../../../assets/img/category/heviDutyvehicles.png',
    name:''
  },
  {
    url:'../../../../assets/img/category/crains.png',
    name:''
  },
  {
    url:'../../../../assets/img/category/yatch.webp',
    name:''
  },
  {
    url:'../../../../assets/img/category/privatejet.webp',
    name:''
  },
 ]
  constructor(){

  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    
  }
}
