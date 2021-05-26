import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/shared/layouts/pages/layout/layout.component';
import { SubscriptionListComponent } from './pages/subscription-list/subscription-list.component';
import { UpdateMonthlyDeliveryComponent } from './pages/update-monthly-delivery/update-monthly-delivery.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'list',
        component: SubscriptionListComponent,
      },
      {
        path: 'update-monthly-delivery',
        component: UpdateMonthlyDeliveryComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscriptionRoutingModule {}
