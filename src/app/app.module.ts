import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './_guards/auth.guard';
import { AuthenticationService } from './_services/authentication.service';
import { UserService } from './_services/user.service';
import { GroupService } from './_services/group.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TablesComponent } from './tables/tables.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AccordionsComponent } from './accordions/accordions.component';
import { BadgesComponent } from './badges/badges.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { PaginationComponent } from './pagination/pagination.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TabsComponent } from './tabs/tabs.component';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { LoginComponent } from './login';
import { LoginLayoutComponent } from './layouts/login-layout.component';
import { HomeComponent } from './home';
import { HomeLayoutComponent } from './layouts/home-layout.component';
import { AccountsComponent } from './accounts/accounts.component';
import { UserComponent } from './accounts/user/user.component';
import { CinvestComponent } from './cinvest/cinvest.component';
import { CinvestSubscriptionComponent } from './cinvest/subscription/subscription.component';
import { GroupComponent } from './accounts/groups/groups.component';
import { GroupMembersComponent } from './accounts/members/members.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    FormsComponent,
    ButtonsComponent,
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    AlertsComponent,
    AccordionsComponent,
    BadgesComponent,
    ProgressbarComponent,
    BreadcrumbsComponent,
    PaginationComponent,
    DropdownComponent,
    TooltipsComponent,
    CarouselComponent,
    TabsComponent,
    LoginComponent,
    HomeComponent,
    HomeLayoutComponent,
    LoginLayoutComponent,
    AccountsComponent,
    UserComponent,
    CinvestComponent,
    CinvestSubscriptionComponent,
    GroupComponent,
    GroupMembersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgxDatatableModule,
    NgbModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    AuthGuard,
    AuthenticationService,
    UserService,
    GroupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }