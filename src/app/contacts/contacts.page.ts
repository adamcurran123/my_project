import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage {
  constructor(private router: Router) {}

  goToHome() {
    // Code for sending the user back to the home page
    this.router.navigate(['/home']);
  }
}

