import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.scss']
})
export class ListaClientesComponent implements OnInit {

  @Input() onlyShow = true;

  constructor() { }

  ngOnInit() {
  }

}
