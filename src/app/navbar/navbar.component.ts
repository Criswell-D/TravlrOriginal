import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  })
  export class NavbarComponent implements OnInit {
  constructor(
  private authenticationService: AuthenticationService
  ) { }
  ngOnInit() { }
  public isLoggedIn(): boolean {
  return this.authenticationService.isLoggedIn();
  }
  public onLogout(): void {
  return this.authenticationService.logout();
  }
  }
  
