import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent  {

  searchedArtist: any[] = [];

  loading: boolean;

  constructor(private spotify: SpotifyService) { }


  search(searchedValue: string){
      this.loading = true;
      //console.log(searchedValue);
      this.spotify.getArtist( searchedValue ).subscribe( (returnedArtists: any) => {
        //console.log( returnedArtists );

        this.searchedArtist = returnedArtists

        this.loading = false;
      })
  };
}
