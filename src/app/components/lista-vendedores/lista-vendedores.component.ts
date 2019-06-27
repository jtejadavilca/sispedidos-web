import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista-vendedores',
  templateUrl: './lista-vendedores.component.html',
  styleUrls: ['./lista-vendedores.component.scss']
})
export class ListaVendedoresComponent implements OnInit {

  @Input() onlyShow = true; 

  constructor() { }

  ngOnInit() {
  }

}
