import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.scss']
})
export class ListaEmpleadosComponent implements OnInit {

  @Input() onlyShow = true;

  constructor() { }

  ngOnInit() {
  }

}
