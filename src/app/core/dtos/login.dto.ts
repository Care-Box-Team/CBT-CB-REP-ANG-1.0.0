import { AdministratorModel } from '../models/administrator.model';
import { ResponseDTO } from './generic.dto';

export interface LoginRequestDTO {
  email: string;
  password: string;
}

export interface LoginResponseModel extends ResponseDTO {
  administrator?: AdministratorModel;
}
