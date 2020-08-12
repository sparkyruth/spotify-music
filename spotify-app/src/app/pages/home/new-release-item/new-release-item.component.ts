import { Component, OnInit, Input } from '@angular/core';

// Models
import { NewReleasesItem } from '../models/new-releases-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-release-item',
  templateUrl: './new-release-item.component.html',
  styleUrls: ['./new-release-item.component.scss']
})
export class NewReleaseItemComponent implements OnInit {
  @Input() newRelease: NewReleasesItem;

  constructor(private router: Router) { /*empty*/ }

  ngOnInit(): void { /*empty*/ }

  public navigate(newRelease: any): void {
    let newReleaseId: number = 0;

    newRelease.type === 'artist' ?  newReleaseId = newRelease.id : newReleaseId = newRelease.artists[0].id;
    this.router.navigate(['/artist', newReleaseId]);
    // this.router.navigate(['/album', newReleaseId]);

    console.log('New Release Id:', newReleaseId);
  }
}
