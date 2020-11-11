import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent  {

  artist: any = {};

  loading: boolean = true;

  topTraks: any[] = [];


  constructor( private activatedRoute: ActivatedRoute, private spotify: SpotifyService) {

    let id: string;



    // console.log( activatedRoute.params['value'].id );
    this.activatedRoute.params.subscribe( params => {
      console.log( params['id'] );

      id = params['id'];

      this.getTopTraks( id );

    })

    this.spotify.getOneArtist( id ).subscribe( (retrivedArtist: any) => {

      this.artist = retrivedArtist;

      this.loading = false;

      //console.log( this.artist );

    })

    

  }

  getTopTraks( id: string ) {
    this.spotify.getTopTraks( id )
        .subscribe( topTraks => {
          console.log(topTraks);
          this.topTraks = topTraks;
    })
  }

  
}
