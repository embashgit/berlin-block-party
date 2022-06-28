import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  
  hamburgerOpen = false;

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  
  }

  toggleHamburger(): void {
    this.hamburgerOpen = !this.hamburgerOpen;
  }


}
