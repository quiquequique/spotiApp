
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { logging } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent  {

  newReleased: any[] = [];

  loading: boolean;

  error: boolean;

  mensajeError: string;

  constructor(private spotify: SpotifyService) {

    this.error = false;

    this.loading = true;

    this.spotify.getNewReleases().subscribe( ( newReleasedData: any ) => {

      //console.log( newReleasedData );

      this.newReleased = newReleasedData;

      this.loading = false;


      // manejo de errores con *ngIf en el html
    }, ( loadingError ) => {

      this.loading = false;

      this.error = true;

      this.mensajeError = loadingError.error.error.message;

    });

  }


}
