import { Component, OnInit } from '@angular/core';

// Models
import { NewReleasesItem } from '../models/new-releases-model';

// Services
import { NewReleasesService } from '../services/new-releases.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public newReleases: NewReleasesItem[] = [];
  public loading: boolean = false;

  constructor(private newReleasesService: NewReleasesService) { /*empty*/ }

  ngOnInit(): void {
    this.loading = true;
    this.getNewReleases();
  }

  // call service to get new releases from spotify
  public getNewReleases(): void {
    this.newReleasesService.getNewReleases().subscribe((data: any) => {
      this.loading = false;
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
