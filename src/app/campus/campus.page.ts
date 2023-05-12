import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campus',
  templateUrl: './campus.page.html',
  styleUrls: ['./campus.page.scss'],
})
export class CampusPage implements OnInit {
  savedData: string = '';

  constructor() { }

  ngOnInit() {
    // Retrieve data from storage if available
    this.savedData = localStorage.getItem('myData') || '';
  }

  saveData() {
    // Save data to storage
    localStorage.setItem('myData', this.savedData);
  }

  clearData() {
    // Clear data from storage
    localStorage.removeItem('myData');
    this.savedData = '';
  }
}
