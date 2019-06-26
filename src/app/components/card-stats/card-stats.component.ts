import { Component, OnInit, Input } from '@angular/core';
import { CardStats } from '../../interfaces/card-stats.interface';

@Component({
  selector: 'app-card-stats',
  templateUrl: './card-stats.component.html',
  styleUrls: ['./card-stats.component.scss']
})
export class CardStatsComponent implements OnInit {

  @Input() propsCard: CardStats;

  constructor() { }

  ngOnInit() {
  }

}
