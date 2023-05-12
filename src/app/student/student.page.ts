import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})
export class StudentPage {

  constructor(private router: Router) { }

  goToHome() {
    // Navigate to the home page
    this.router.navigate(['/home']);
  }

}

