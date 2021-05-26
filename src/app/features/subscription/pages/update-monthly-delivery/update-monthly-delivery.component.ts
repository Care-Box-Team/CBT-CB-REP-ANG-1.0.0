import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentClass } from 'src/app/core/classes/component.class';
import { SubscriptionService } from 'src/app/core/services/subscription.service';

@Component({
  selector: 'app-update-monthly-delivery',
  templateUrl: './update-monthly-delivery.component.html',
  styleUrls: ['./update-monthly-delivery.component.css'],
})
export class UpdateMonthlyDeliveryComponent extends ComponentClass implements OnInit {
  constructor(private router: Router, private subscriptionService: SubscriptionService) {
    super();
  }

  ngOnInit(): void {}

  async eventUpdateMonthlyDelivery() {
    const response = await this.subscriptionService.updateDeliveredThisMonthOfSubscriptions().toPromise();
    if (response) {
      this.router.navigate(['/subscription/list']);
    }
  }
}
