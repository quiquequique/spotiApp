import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { }

  getQuery( query: string ) {

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCyLAKRD35OnkbJstw0JEicdiZpskqChEzo1GDToU0z4QlKDu60Hx2NjlwrnNSfJ4WvHzgIE33A34rejMw'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases()  {

    //  const headers = new HttpHeaders({
    //    'Authorization': 'Bearer BQBccOE-YmhtApGnB70CE0bOrcfgCbKtuYab054P7AXtB-D82g0kR9fV43bcTXXhwi2PlDA0zQunQo_cU1A'
    //  })
    //  return this.http.get( 'https://api.spotify.com/v1/browse/new-releases', { headers } )
    //  .pipe( map( retrivedData => {
    //    return retrivedData['albums'].items;
    //  }))
                // optimizacion con funcion query unificada y mas corto posible
    return this.getQuery( 'browse/new-releases')
      .pipe( map( data => data['albums'].items));
  }

  getArtist( searchWord: string ){
    //  const headers = new HttpHeaders({
    //    'Authorization': 'Bearer BQAqujsQB3FvOnzIwqoZSfPovarHCUH2PlTFzoPxk92xxbmm9PHVWhUBYvuCGhaEvbbtFfv0WfyqeZrqmwlxtPYZSz13iMYRAHvPfgDIuQ2bmPxcsxXkLAzhV1LPJQQ4fCPK4bu0BQ'
    //  })
    //   return this.http.get( `https://api.spotify.com/v1/search?q=${ searchWord }&type=artist`, { headers } )
    //   .pipe( map( retrivedArtists => {
    //     return retrivedArtists['artists'].items
    //   }))
            // optimizacion con funcion query unificada y mas corto posible
    return this.getQuery ( `search?q=${ searchWord }&type=artist` )
      .pipe( map( data => data['artists'].items)); //cuando el arrow tiene una sola linea y esta es return se puede obviar el return
  }

  getOneArtist ( artistId: string ) {

    // console.log( artistId );

    return this.getQuery(`artists/${ artistId }`)
  }

  getTopTraks ( artistId: string ) {

    // console.log( artistId );

    return this.getQuery(`artists/${ artistId }/top-tracks?market=us`)
    .pipe( map( data => data['tracks']));
  }
}
