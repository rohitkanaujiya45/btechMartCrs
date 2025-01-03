import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {

  cities: string[] = [];

  constructor() {
    this.loadCities();
  }

  // Function to load the list of cities
  loadCities(): void {

    // cities: string[] = [
      this.cities = [
      'Mumbai', 'Delhi', 'Bengaluru', 'Hyderabad', 'Ahmedabad', 
      'Chennai', 'Kolkata', 'Surat', 'Pune', 'Jaipur', 
      'Lucknow', 'Kanpur', 'Nagpur', 'Visakhapatnam', 'Indore', 
      'Thane', 'Bhopal', 'Patna', 'Vadodara', 'Ghaziabad', 
      'Ludhiana', 'Agra', 'Nashik', 'Faridabad', 'Meerut', 
      'Rajkot', 'Kalyan-Dombivli', 'Vasai-Virar', 'Varanasi', 
      'Srinagar', 'Aurangabad', 'Dhanbad', 'Amritsar', 'Navi Mumbai', 
      'Allahabad', 'Ranchi', 'Howrah', 'Coimbatore', 'Jabalpur', 
      'Gwalior', 'Vijayawada', 'Jodhpur', 'Madurai', 'Raipur', 
      'Kota', 'Guwahati', 'Chandigarh', 'Solapur', 'Hubli-Dharwad', 
      'Mysore', 'Tiruchirappalli', 'Bareilly', 'Aligarh', 'Tiruppur', 
      'Moradabad', 'Jalandhar', 'Bhubaneswar', 'Salem', 'Warangal', 
      'Guntur', 'Bhiwandi', 'Saharanpur', 'Gorakhpur', 'Bikaner', 
      'Amravati', 'Noida', 'Jamshedpur', 'Bhilai Nagar', 'Cuttack', 
      'Firozabad', 'Kochi', 'Bhavnagar', 'Dehradun', 'Durgapur', 
      'Asansol', 'Nanded-Waghala', 'Ajmer', 'Ujjain', 'Siliguri', 
      'Jhansi', 'Ulhasnagar', 'Jammu', 'Sangli-Miraj & Kupwad', 
      'Mangalore', 'Erode', 'Belgaum', 'Ambattur', 'Tirunelveli', 
      'Malegaon', 'Gaya', 'Jalgaon', 'Udaipur', 'Maheshtala', 
      'Davanagere', 'Kozhikode', 'Kurnool', 'Rajpur Sonarpur', 
      'Rajahmundry', 'Bokaro Steel City', 'South Dumdum', 'Bellary', 
      'Patiala', 'Gopalpur', 'Agartala', 'Bhagalpur', 'Muzaffarnagar', 
      'Bilaspur', 'Shahjahanpur', 'Thrissur', 'Alwar', 'Kakinada', 
      'Nizamabad', 'Sagar', 'Tumkur', 'Hisar', 'Rohtak', 
      'Panipat', 'Darbhanga', 'Kharagpur', 'Aizawl', 'Ichalkaranji', 
      'Tirupati', 'Karnal', 'Bathinda', 'Rampur', 'Shivamogga', 
      'Ratlam', 'Modinagar', 'Hapur', 'Arrah', 'Karimnagar', 
      'Anantapur', 'Etawah', 'Bharatpur', 'Begusarai', 'New Delhi'
    ];
    
  }
}