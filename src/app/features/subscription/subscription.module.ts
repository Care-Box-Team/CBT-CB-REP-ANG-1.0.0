import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionListComponent } from './pages/subscription-list/subscription-list.component';
import { SubscriptionRoutingModule } from './subscription-routing.module';
import { LayoutsModule } from 'src/app/shared/layouts/layouts.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SubscriptionListComponent],
  imports: [CommonModule, SubscriptionRoutingModule, LayoutsModule, ReactiveFormsModule],
})
export class SubscriptionModule {}
