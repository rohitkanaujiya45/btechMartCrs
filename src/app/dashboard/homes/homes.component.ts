import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { TopBannersComponent } from './top-banners/top-banners.component';
import { ModulesComponent } from './modules/modules.component';
import { ExampleComponent } from './carousel-component/carousel-component.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-homes',
  standalone: true,
  imports: [CommonModule,CarouselModule,TestimonialComponent, TopBannersComponent, ModulesComponent,ExampleComponent],
  templateUrl: './homes.component.html',
  styleUrl: './homes.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class HomesComponent {
  customOptions: OwlOptions = { 
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 4
      }
    },
    nav: false
  };

 airCraftData:any = [1,2,3,4,5,6]
  activeTab: string = 'newcars'; 
  activeTab2:string = 'cars'
  showTab(tabId: string, type:string): void {
    if(type == 'new'){
      this.activeTab = tabId
      var element:any = document.getElementById(tabId);
      element.style.display = 'block'
    }
    if(type == 'old'){
      this.activeTab2 = tabId;
      var element:any = document.getElementById(tabId);
       element.style.display = 'block'
    }
    
  }
}
