import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

// Services
import { SearchService } from '../services/search.service';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() public showModal: boolean = false;

  public artistsList: any[] = [];
  public tracksList: any[] = [];
  public moreArtists: boolean = false;
  public moreTracks: boolean = false;
  public activeLanguage: string = 'en';

  constructor(
    private searchService: SearchService,
    private router: Router,
    private globalService: GlobalService,
    private translate: TranslateService
    ) { /*empty*/ }

  ngOnInit(): void { 
    this.setLanguage();
   }

  // search both artist and track
  public search(term: string): void {
    console.log('Term to find:', term);

    // update url with term
    this.router.navigate(['search', term]);

    this.searchService.getTracksAndArtists(term).subscribe((data: any) => {
      this.artistsList = data.artists.items;
      this.tracksList = data.tracks.items;

      console.log('Data:', data);

      if (this.artistsList.length === 0 && this.tracksList.length === 0) {
        this.showModal = true;
      }

    }, (err) => {
      console.log('Error:', err);
      console.error(err.message);
    }, () => {
      console.log('Complete!');
    });
  }

  public setLanguage(): void {
    this.activeLanguage = this.globalService.getGlobalLanguage();
    this.translate.use(this.activeLanguage);
  }

  public seeMoreArtists(): void {
    this.moreArtists = !this.moreArtists;
  }

  public seeMoreTracks(): void {
    this.moreTracks = !this.moreTracks;
  }

  public scrollTo(elementId: string): void {
    document.getElementById(elementId).scrollIntoView();
  }
}
