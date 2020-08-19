import { GlobalService } from 'src/app/services/global.service';
import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-artist-top-track',
  templateUrl: './artist-top-track.component.html',
  styleUrls: ['./artist-top-track.component.scss']
})
export class ArtistTopTrackComponent implements OnInit {
  @Input() topTrack: any;
  public play: boolean = false;
  public activeLanguage: string = 'en';

  constructor(private globalService: GlobalService, private translate: TranslateService) {
    this.setLanguage();
  }

  ngOnInit(): void { /*empty*/ }

  // updates variable that controls player visibility
  public player(): void {
    this.play = !this.play;
    console.log('play:', this.play);
  }

  public setLanguage(): void {
    this.activeLanguage = this.globalService.getGlobalLanguage();
    this.translate.use(this.activeLanguage);
  }
}
