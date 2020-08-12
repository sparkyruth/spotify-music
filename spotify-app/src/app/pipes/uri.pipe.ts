import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';

@Pipe({
  name: 'uri'
})
export class UriPipe implements PipeTransform {

  constructor( private domSanitizer: DomSanitizer){ /*empty*/ }

  // receive uri and verifies security
  transform( value: string, url: string): any {
    return this.domSanitizer.bypassSecurityTrustResourceUrl( url + value );
  }

}
