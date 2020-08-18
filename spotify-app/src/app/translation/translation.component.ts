import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.scss']
})
export class TranslationComponent implements OnInit {
  public activeLanguage = 'en';

  constructor(private translate: TranslateService) {
    // default language
    this.translate.setDefaultLang(this.activeLanguage);
  }

  ngOnInit(): void { /*empty*/ }

  // switch language
  public switchLanguage(language: string) {
    this.activeLanguage = language;
    this.translate.use(language);
  }

}
