import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { CatalogoPipe } from './pipes/catalogo.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SweetAlert2Module
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CatalogoPipe
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CatalogoPipe
  ],
})
export class SharedModule { }
