import { Component, OnInit, Input } from '@angular/core';

// Models
import { NewReleasesItem } from '../models/new-releases-model';

@Component({
  selector: 'app-new-release-item',
  templateUrl: './new-release-item.component.html',
  styleUrls: ['./new-release-item.component.scss']
})
export class NewReleaseItemComponent implements OnInit {
  @Input() newRelease: NewReleasesItem;

  constructor() { /*empty*/ }

  ngOnInit(): void { /*empty*/ }
}
