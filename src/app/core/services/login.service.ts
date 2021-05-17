import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginRequestDTO, LoginResponseModel } from '../dtos/login.dto';
import { Observable } from 'rxjs';
import { AdministratorModel } from '../models/administrator.model';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  enter(loginRequestDTO: LoginRequestDTO): Observable<AdministratorModel> {
    const URL = `${environment.API_URL}/login/administratorLogin`;

    return this.httpClient.post<LoginResponseModel>(URL, loginRequestDTO).pipe(
      map((loginResponse) => {
        return loginResponse.administrator;
      })
    );
  }
}
