import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CardStats } from '../../interfaces/card-stats.interface';
import { CardGraphStats } from '../../interfaces/card-graph-stats.interface';

import * as Chartist from 'chartist';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss']
})
export class EstadisticasComponent implements OnInit, AfterViewInit {


  propsPedidosPendientes: CardStats = {
    icon: 'schedule',
    iconHeaderClass: 'card-header-warning',
    category: 'PENDIENTES',
    title: '3',
    subtitle: 'unidades',
    iconFooterClass: 'text-danger',
    iconFooter: 'warning',
    linkFooter: 'Get More Space...'
  };
  propsPedidosAtendidos: CardStats = {
    icon: 'assignment_turned_in',
    iconHeaderClass: 'card-header-success',
    category: 'ATENDIDOS',
    title: '50',
    subtitle: 'unidades',
    iconFooterClass: '',
    iconFooter: 'done',
    textFooter: 'Entregados el día de hoy'
  };

  propsPedidosCanceladosDevueltos: CardStats = {
    icon: 'info_outline',
    iconHeaderClass: 'card-header-danger',
    category: 'CANCEL./DEVUELT.',
    title: '1',
    subtitle: 'unidades',
    iconFooterClass: 'text-danger',
    iconFooter: 'assignment_late',
    linkFooter: 'Ver listado'
  };

  propsGraphPedidosSemana: CardGraphStats = {
    headerClass: 'card-header-success',
    id: 'dailySalesChart',
    title: 'Daily Sales',
    category: '<span class="text-success"><i class="fa fa-long-arrow-up"></i> 55% </span> increase in today sales.',
    iconFooter: 'access_time',
    textFooter: 'updated 4 minutes ago'
  };

  propsGraphPedidosPorEmpledo: CardGraphStats = {
    headerClass: 'card-header-warning',
    id: 'websiteViewsChart',
    title: 'Ventas por Empledo',
    category: 'Ventas del mes por empleado.',
    iconFooter: 'face',
    textFooter: 'Rango: 01/06/2019 al 26/06/2019'
  };

  constructor() { }

  ngOnInit() {
  }

  startAnimationForLineChart(chart) {
      let seq: any;
      let delays: any;
      let durations: any;
      seq = 0;
      delays = 80;
      durations = 500;

      chart.on('draw', (data) => {
        if (data.type === 'line' || data.type === 'area') {
          data.element.animate({
            d: {
              begin: 600,
              dur: 700,
              from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
              to: data.path.clone().stringify(),
              easing: Chartist.Svg.Easing.easeOutQuint
            }
          });
        } else if (data.type === 'point') {
              seq++;
              data.element.animate({
                opacity: {
                  begin: seq * delays,
                  dur: durations,
                  from: 0,
                  to: 1,
                  easing: 'ease'
                }
              });
          }
      });

      seq = 0;
  }
  startAnimationForBarChart(chart) {
      let seq2: any;
      let delays2: any;
      let durations2: any;

      seq2 = 0;
      delays2 = 80;
      durations2 = 500;
      chart.on('draw', (data) => {
        if (data.type === 'bar') {
            seq2++;
            data.element.animate({
              opacity: {
                begin: seq2 * delays2,
                dur: durations2,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            });
        }
      });

      seq2 = 0;
  }

  ngAfterViewInit() {
    /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */

    const dataDailySalesChart: any = {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        series: [
            [12, 17, 7, 17, 23, 18, 38]
        ]
    };

    const optionsDailySalesChart: any = {
        lineSmooth: Chartist.Interpolation.cardinal({
            tension: 0
        }),
        low: 0,
        high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
        chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
    };

    const dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

    this.startAnimationForLineChart(dailySalesChart);


      /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

    const dataCompletedTasksChart: any = {
      labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
      series: [
          [230, 750, 450, 300, 280, 240, 200, 190]
      ]
    };

    const optionsCompletedTasksChart: any = {
        lineSmooth: Chartist.Interpolation.cardinal({
            tension: 0
        }),
        low: 0,
        high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
        chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
    };

    // const completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

    // start animation for the Completed Tasks Chart - Line Chart
    // this.startAnimationForLineChart(completedTasksChart);



    /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

    const datawebsiteViewsChart = {
      labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      series: [
        [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

      ]
    };
    const optionswebsiteViewsChart = {
        axisX: {
            showGrid: false
        },
        low: 0,
        high: 1000,
        chartPadding: { top: 0, right: 5, bottom: 0, left: 0}
    };
    const responsiveOptions: any[] = [
      ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc:  (value) => {
            return value[0];
          }
        }
      }]
    ];
    const websiteViewsChart = new Chartist.Bar('#websiteViewsChart', datawebsiteViewsChart, optionswebsiteViewsChart, responsiveOptions);

    // start animation for the Emails Subscription Chart
    this.startAnimationForBarChart(websiteViewsChart);
  }
}
