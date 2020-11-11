import { Component,  Input } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent  {

  @Input() items : any[] = [];

  constructor( private router: Router ) { }

  showArtist( item: any ) {
    // console.log( item );

    let artistaId: any;

    if (item.type === 'artist' ) {
      artistaId = item.id;
    }else{
      artistaId = item.artists[0].id;
    }
    // console.log( artistaId );
    this.router.navigate([ '/artist', artistaId])
    
  }

}
