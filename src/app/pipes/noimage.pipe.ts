import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform( arrImages: any[] ): string {

    if ( !arrImages ) {
      return 'assets/img/noImage.png'
    }
    if ( arrImages.length > 0 ) {
      return arrImages[0].url;
    }else{
      return 'assets/img/noImage.png'
    }
    
  }

}
