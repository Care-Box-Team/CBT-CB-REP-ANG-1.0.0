import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ComponentClass } from 'src/app/core/classes/component.class';
import { SubscriptionModel } from 'src/app/core/models/subscription.model';
import { SubscriptionService } from 'src/app/core/services/subscription.service';

@Component({
  selector: 'app-subscription-list',
  templateUrl: './subscription-list.component.html',
  styleUrls: ['./subscription-list.component.css'],
})
export class SubscriptionListComponent extends ComponentClass implements OnInit {
  subscriptionFormGroup: FormGroup;
  subscriptions: SubscriptionModel[] = [];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private subscriptionService: SubscriptionService
  ) {
    super();
  }

  ngOnInit(): void {
    this.buildSubscriptionFormGroup();
    this.loadSubscription();
  }

  async loadSubscription() {
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
}
