import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { AlbumRoutingModule } from './album-routing.module';

// Components
import { AlbumComponent } from './album-component/album.component';

// Services
import { AlbumService } from './services/album.service';

// Pipes
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  declarations: [
    AlbumComponent,
  ],
  imports: [
    CommonModule,
    AlbumRoutingModule,
    PipesModule,
  ],
  providers: [
    AlbumService,
  ]
})
export class AlbumModule { }
