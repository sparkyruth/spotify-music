import { Component, OnInit } from '@angular/core';

import { GlobalService } from '../../../services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public newReleases: any[] = [];

  constructor(private globalService: GlobalService) { /*empty*/ }

  ngOnInit(): void {
    this.getNewReleases();
  }

  // call service to get new releases from spotify
  public getNewReleases(): void {
    this.globalService.getNewReleases().subscribe((data: any) => {
      this.newReleases = data;
      console.log('Data:', data);
    }, (err) => {
      console.log('Error:', err);
      console.error(err.message);
    }, () => {
      console.log('Complete!');
    });
  }
}
