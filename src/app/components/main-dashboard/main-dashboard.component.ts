import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-dashboard',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.css',
})
export class MainDashboardComponent {
  accountData: any;
  constructor(
    private router: Router,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit(): void {
    this.firebaseService.getValues().subscribe(
      (data) => {
        this.accountData = data;
        console.log('accountData', this.accountData);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
  onSignOff(): void {
    this.router.navigate(['/']);
  }
}
