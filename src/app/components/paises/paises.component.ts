import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  paises: any[] = [];

  constructor( private http: HttpClient) { 

    this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe( (paisesData: any) => {
      console.log(paisesData);
      this.paises = paisesData
      
    })
  }


  ngOnInit(): void {
  }

}
