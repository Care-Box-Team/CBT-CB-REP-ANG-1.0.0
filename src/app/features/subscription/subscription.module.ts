import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionListComponent } from './pages/subscription-list/subscription-list.component';
import { SubscriptionRoutingModule } from './subscription-routing.module';
import { LayoutsModule } from 'src/app/shared/layouts/layouts.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateMonthlyDeliveryComponent } from './pages/update-monthly-delivery/update-monthly-delivery.component';

@NgModule({
  declarations: [SubscriptionListComponent, UpdateMonthlyDeliveryComponent],
  imports: [CommonModule, SubscriptionRoutingModule, LayoutsModule, ReactiveFormsModule],
})
export class SubscriptionModule {}
