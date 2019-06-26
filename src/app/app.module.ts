import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AppRoutingModule } from './app.routing';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    // DashboardComponent,
    // SidebarComponent,
    // NavbarComponent,
    // FooterComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
