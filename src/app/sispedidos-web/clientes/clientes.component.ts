import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  @Input() onlyShow = true;

  constructor() { }

  ngOnInit() {
  }

}
