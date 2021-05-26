import { ClientModel } from './client.model';

export interface SubscriptionModel {
  idSubscription?: number;
  client?: ClientModel;
  deliveryDate?: string;
  deliveredThisMonth?: boolean;
  deliveries?: number;
  adress?: string;
  price?: number;
}
