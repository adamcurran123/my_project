import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  stories: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {}

  sendToAcademics() {
    // code for sending user to academics page
    this.router.navigate(['/academics']);
  }

  sendToCampus() {
    // code for sending user to campus page
    // Open campus page in a new tab
    window.open('/campus', '_blank');
  }

  sendToContacts() {
    // code for sending user to contacts page
    this.router.navigate(['/contacts']);
  }

  sendToStudent() {
    // code for sending user to student life page
    this.router.navigate(['/student']);
  }
}
