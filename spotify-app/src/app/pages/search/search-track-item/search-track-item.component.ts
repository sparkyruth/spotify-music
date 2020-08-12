import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-track-item',
  templateUrl: './search-track-item.component.html',
  styleUrls: ['./search-track-item.component.scss']
})
export class SearchTrackItemComponent implements OnInit {
  @Input() track: any;

  constructor() { /*empty*/ }

  ngOnInit(): void { /*empty*/ }

}
