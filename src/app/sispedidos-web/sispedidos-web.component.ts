import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy, PopStateEvent } from '@angular/common';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { NavbarComponent } from '../shared/navbar/navbar.component';


// import 'rxjs/add/operator/filter';
import { map, filter, scan } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import PerfectScrollbar from 'perfect-scrollbar';
import * as $ from 'jquery';

@Component({
  selector: 'app-sispedidos-web',
  templateUrl: './sispedidos-web.component.html',
  styles: []
})
export class SispedidosWebComponent implements OnInit, AfterViewInit {
  private routerLocal: Subscription;
  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];

  constructor( public location: Location, private router: Router) { }

  ngOnInit() {
    const isWindows = navigator.platform.indexOf('Win') > -1;

    if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
        // if we are on windows OS we activate the perfectScrollbar function

        document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
    } else {
        document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
    }
    const elemMainPanel = document.querySelector('.main-panel') as HTMLElement;
    const elemSidebar = document.querySelector('.sidebar .sidebar-wrapper') as HTMLElement;

    this.location.subscribe((ev: PopStateEvent) => {
        this.lastPoppedUrl = ev.url;
    });
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
          if (event.url !== this.lastPoppedUrl) {
            this.yScrollStack.push(window.scrollY);
          }
      } else if (event instanceof NavigationEnd) {
          if (event.url === this.lastPoppedUrl) {
              this.lastPoppedUrl = undefined;
              window.scrollTo(0, this.yScrollStack.pop());
          } else {
            window.scrollTo(0, 0);
          }
      }
    });
    this.routerLocal = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      elemMainPanel.scrollTop = 0;
      elemSidebar.scrollTop = 0;
    });
    if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
        let ps = new PerfectScrollbar(elemMainPanel);
        ps = new PerfectScrollbar(elemSidebar);
    }

    const windowWidth = $(window).width();
    const $sidebar = $('.sidebar');
    const $sidebarResponsive = $('body > .navbar-collapse');
    const $sidebarImgContainer = $sidebar.find('.sidebar-background');


    if (windowWidth > 767) {
        if ($('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
            $('.fixed-plugin .dropdown').addClass('open');
        }

    }

    $('.fixed-plugin a').click( (event) => {
      // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
        if ($(this).hasClass('switch-trigger')) {
            if (event.stopPropagation) {
                event.stopPropagation();
            } else if (window.event) {
               window.event.cancelBubble = true;
            }
        }
    });

    $('.fixed-plugin .badge').click(() => {
        const $fullPageBackground = $('.full-page-background');


        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        const newColor = $(this).data('color');

        if ($sidebar.length !== 0) {
            $sidebar.attr('data-color', newColor);
        }

        if ($sidebarResponsive.length !== 0) {
            $sidebarResponsive.attr('data-color', newColor);
        }
    });

    $('.fixed-plugin .img-holder').click(() => {
        const $fullPageBackground = $('.full-page-background');

        $(this).parent('li').siblings().removeClass('active');
        $(this).parent('li').addClass('active');


        const newImage = $(this).find('img').attr('src');

        if ($sidebarImgContainer.length !== 0 ) {
            $sidebarImgContainer.fadeOut('fast', () => {
               $sidebarImgContainer.css('background-image', 'url("' + newImage + '")');
               $sidebarImgContainer.fadeIn('fast');
            });
        }

        if ($fullPageBackground.length !== 0) {

            $fullPageBackground.fadeOut('fast', () => {
               $fullPageBackground.css('background-image', 'url("' + newImage + '")');
               $fullPageBackground.fadeIn('fast');
            });
        }

        if ($sidebarResponsive.length !== 0) {
            $sidebarResponsive.css('background-image', 'url("' + newImage + '")');
        }
    });
  }
  ngAfterViewInit() {
      this.runOnRouteChange();
  }

  isMaps(path) {
    let titlee = this.location.prepareExternalUrl(this.location.path());
    titlee = titlee.slice( 1 );
    return path !== titlee;
  }
  runOnRouteChange(): void {
    if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
      const elemMainPanel = document.querySelector('.main-panel') as HTMLElement;
      const ps = new PerfectScrollbar(elemMainPanel);
      ps.update();
    }
  }
  isMac(): boolean {
      let bool = false;
      if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
          bool = true;
      }
      return bool;
  }
}
