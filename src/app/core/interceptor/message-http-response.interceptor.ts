import { HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

class State {
  static SUCCESS = 1;
  static WARNING = 0;
  static ERROR = -1;
  static INTERNAL_ERROR = -2;
}

@Injectable()
export class MessageHttpResponseInterceptor implements HttpInterceptor {
  constructor(private toastrService: ToastrService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(request).pipe(
      tap((response) => {
        if (response instanceof HttpResponse && response?.body) {
          this.showSnackBar(response?.body);
        }
      })
    );
  }

  showSnackBar(body) {
    if (body?.status == State.SUCCESS) {
      this.toastrService.success(body?.message);
    } else {
      this.toastrService.error(body?.message);
    }
  }
}
