import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public openSideBar: boolean = false;

  constructor() { /*empty*/ }

  ngOnInit(): void { /*empty*/ }

  // update variable which controls side bar visibility
  public openOrCloseNav(): void {
    this.openSideBar = !this.openSideBar;
    console.log('open side bar:', this.openSideBar);
  }
}
