import { SubscriptionModel } from '../models/subscription.model';
import { ResponseDTO } from './generic.dto';

export interface SubscriptionListResponseDTO extends ResponseDTO {
  subscriptions?: SubscriptionModel[];
}

export interface SubscriptionUpdateDeliveredThisMonthRequestDTO extends ResponseDTO {
  idSubscription?: number;
  deliveredThisMonth?: boolean;
}
