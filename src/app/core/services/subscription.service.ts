import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SubscriptionListResponseDTO, SubscriptionUpdateDeliveredThisMonthRequestDTO } from '../dtos/subscription.dto';
import { SubscriptionModel } from '../models/subscription.model';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  constructor(private httpClient: HttpClient) {}

  getSubscriptions(): Observable<SubscriptionModel[]> {
    const URL = `${environment.API_URL}/subscriptions/listTodaySubscription`;

    return this.httpClient.get<SubscriptionListResponseDTO>(URL).pipe(
      map((subscriptionListResponseDTO) => {
        return subscriptionListResponseDTO.subscriptions;
      })
    );
  }

  updateDeliveredThisMonthOfSubscription(
    subscriptionUpdateDeliveredThisMonthRequestDTO: SubscriptionUpdateDeliveredThisMonthRequestDTO
  ) {
    const URL = `${environment.API_URL}/subscriptions/updateDeliveredThisMonth`;

    return this.httpClient.put(URL, subscriptionUpdateDeliveredThisMonthRequestDTO);
  }

  updateDeliveredThisMonthOfSubscriptions() {
    const URL = `${environment.API_URL}/subscriptions/montlyUpdate`;

    return this.httpClient.get(URL);
  }
}
