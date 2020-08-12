import { NgModule } from '@angular/core';

// Pipes
import { ErrorImagePipe } from './error-image.pipe';

@NgModule({
  imports: [],
  declarations: [
        ErrorImagePipe,
    ],
  exports: [
        ErrorImagePipe,
    ]
})
export class PipesModule { }