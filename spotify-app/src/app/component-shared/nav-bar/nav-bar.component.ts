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

  public openNav(): void {
    this.openSideBar = true;
  }

  public closeNav(): void {
    this.openSideBar = false;
  }

}
