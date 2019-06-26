import { Component, OnInit, Input } from '@angular/core';
import { CardGraphStats } from '../../interfaces/card-graph-stats.interface';

@Component({
  selector: 'app-card-graph-stats',
  templateUrl: './card-graph-stats.component.html',
  styleUrls: ['./card-graph-stats.component.scss']
})
export class CardGraphStatsComponent implements OnInit {

  @Input() popGraphCard: CardGraphStats;

  constructor() { }

  ngOnInit() {
  }

}
