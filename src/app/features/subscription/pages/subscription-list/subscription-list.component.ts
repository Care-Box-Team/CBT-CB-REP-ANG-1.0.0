import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ComponentClass } from 'src/app/core/classes/component.class';
import { SubscriptionModel } from 'src/app/core/models/subscription.model';
import { SubscriptionService } from 'src/app/core/services/subscription.service';
import { SubscriptionUpdateDeliveredThisMonthRequestDTO } from '../../../../core/dtos/subscription.dto';

@Component({
  selector: 'app-subscription-list',
  templateUrl: './subscription-list.component.html',
  styleUrls: ['./subscription-list.component.css'],
})
export class SubscriptionListComponent extends ComponentClass implements OnInit {
  subscriptionFormGroup: FormGroup;
  subscriptions: SubscriptionModel[] = [];

  constructor(private formBuilder: FormBuilder, private subscriptionService: SubscriptionService) {
    super();
  }

  ngOnInit(): void {
    this.buildSubscriptionFormGroup();
    this.loadSubscriptions();
  }

  async loadSubscriptions() {
    this.subscriptions = await this.subscriptionService.getSubscriptions().toPromise();
  }

  buildSubscriptionFormGroup() {
    this.subscriptionFormGroup = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
    });
  }

  eventClickFind() {}

  eventUpdateDeliveredThisMonth(deliveredThisMonth, idSubscription) {
    const subscriptionUpdateDeliveredThisMonthRequestDTO: SubscriptionUpdateDeliveredThisMonthRequestDTO = {
      idSubscription: idSubscription,
      deliveredThisMonth: deliveredThisMonth?.target?.checked,
    };

    this.subscriptionService
      .updateDeliveredThisMonthOfSubscription(subscriptionUpdateDeliveredThisMonthRequestDTO)
      .subscribe(() => {
        this.updateValueOfSubscriptionList(subscriptionUpdateDeliveredThisMonthRequestDTO);
      });
  }

  private updateValueOfSubscriptionList(
    subscriptionUpdateDeliveredThisMonthRequestDTO: SubscriptionUpdateDeliveredThisMonthRequestDTO
  ) {
    this.subscriptions.map((subscription: SubscriptionModel) => {
      if (subscription.idSubscription == subscriptionUpdateDeliveredThisMonthRequestDTO.idSubscription) {
        subscription.deliveredThisMonth = subscriptionUpdateDeliveredThisMonthRequestDTO.deliveredThisMonth;
      }
      return subscription;
    });
  }
}
