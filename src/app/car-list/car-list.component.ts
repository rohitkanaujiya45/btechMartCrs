import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSliderModule} from '@angular/material/slider';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, MatTabsModule,MatSliderModule,RouterLink ],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.scss'
})
export class CarListComponent {
  setRangeBudget:any = 0;
  setKmDerive:any = 0;

  // dropdowns: { [key: string]: boolean } = {};

  
  toggleDropdown(dropdownId:any) {
    let dropdown:any = document.getElementById(dropdownId);
    let isVisible = dropdown.style.display === "block";
    dropdown.style.display = isVisible ? "none" : "block";
    // Toggle icon
    const icon = dropdown.previousElementSibling.querySelector(".toggle-icon");
    icon.textContent = isVisible ? "+" : "-";
    
  }


    
    }
  
