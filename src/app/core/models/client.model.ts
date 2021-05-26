import { UserLoginModel } from './user-login.model';

export interface ClientModel {
  idClient?: number;
  userLogin?: UserLoginModel;
  names?: string;
  lastNames?: string;
  adress?: string;
  phone?: string;
}
