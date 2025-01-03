import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-complaint',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './complaint.component.html',
  styleUrl: './complaint.component.scss'
})
export class ComplaintComponent {
  // activeContainer: string | null = null;

  // toggleContainer(containerId: string): void {
  //   this.activeContainer = this.activeContainer === containerId ? null : containerId;
  // }

  // isContainerActive(containerId: string): boolean {
  //   return this.activeContainer === containerId;
  // }
  activeDropdown: string | null = null;

  toggleDropdown(targetId: string) {
    if (this.activeDropdown === targetId) {
      this.activeDropdown = null;
    } else {
      this.activeDropdown = targetId;
    }
  }
}