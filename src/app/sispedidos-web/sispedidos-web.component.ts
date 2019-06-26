import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sispedidos-web',
  templateUrl: './sispedidos-web.component.html',
  styles: []
})
export class SispedidosWebComponent implements OnInit {

  constructor( public location: Location) { }

  ngOnInit() {
  }

  isMaps(path) {
    let titlee = this.location.prepareExternalUrl(this.location.path());
    titlee = titlee.slice( 1 );
    return path !== titlee;
  }
}
