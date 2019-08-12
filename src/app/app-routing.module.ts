import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TablesComponent } from './tables/tables.component';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';
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


const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },
  {
    path: 'forms',
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: FormsComponent
      }
    ]
  },
  {
    path: 'buttons',
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: ButtonsComponent
      }
    ]
  },
  {
    path: 'tables',
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: TablesComponent
      }
    ]
  },
  {
    path: 'icons',
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: IconsComponent
      }
    ]
  },
  {
    path: 'typography',
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: TypographyComponent
      }
    ]
  },
  {
    path: 'alerts',
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: AlertsComponent
      }
    ]
  },
  {
    path: 'accordions',
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: AccordionsComponent
      }
    ]
  },
  {
    path: 'accounts',
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: AccountsComponent
      }
    ]
  },
  {
    path: 'user-subscription',
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: UserComponent
      }
    ]
  },
  {
    path: 'cinvest',
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: CinvestComponent
      }
    ]
  },
  {
    path: 'cinvest-subscription',
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: CinvestSubscriptionComponent
      }
    ]
  },
  {
    path: 'groups',
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: GroupComponent
      }
    ]
  },
  {
    path: 'groups/:id/members',
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: GroupMembersComponent
      }
    ]
  },
  { path: 'badges', component: BadgesComponent },
  { path: 'progressbar', component: ProgressbarComponent },
  { path: 'breadcrumbs', component: BreadcrumbsComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'dropdowns', component: DropdownComponent },
  { path: 'tooltips', component: TooltipsComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'tabs', component: TabsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
