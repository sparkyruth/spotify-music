import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public openSideBar: boolean = false;
  public activeLanguage: string = 'en';
  public moreLanguages: boolean = false;

  constructor(
    private translate: TranslateService,
    private router: Router,
    private globalService: GlobalService,
    ) {
    // default language
    this.translate.setDefaultLang(this.activeLanguage);
    console.log('See languages:', this.moreLanguages);
  }

  ngOnInit(): void { /*empty*/ }

  // update variable which controls side bar visibility
  public openOrCloseNav(): void {
    this.openSideBar = !this.openSideBar;
    console.log('open side bar:', this.openSideBar);
  }

  // switch language
  public switchLanguage(language: string) {
    this.activeLanguage = language;
    this.translate.use(language);
    this.globalService.setGlobalLanguage(language);
  }

  public seeLanguages(): void {
    this.moreLanguages = !this.moreLanguages;
    console.log('See languages:', this.moreLanguages);
  }

  public navigate(): void {
    this.router.navigate(['home', this.activeLanguage]);
  }
}
