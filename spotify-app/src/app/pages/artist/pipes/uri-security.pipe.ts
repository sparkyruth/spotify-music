import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';

@Pipe({
  name: 'uriSecurity'
})
export class UriSecurityPipe implements PipeTransform {

  constructor( private domSanitizer: DomSanitizer){ /*empty*/ }

  // receive uri and verifies security
  transform( value: string): any {
    const url = 'https://open.spotify.com/embed?uri=';
    return this.domSanitizer.bypassSecurityTrustResourceUrl( url + value );
  }

}
