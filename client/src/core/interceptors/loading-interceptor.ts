import { inject } from '@angular/core';
import { BusyService } from './../services/busy-service';
import { HttpInterceptorFn } from '@angular/common/http';
import { delay, finalize } from 'rxjs';

const cache = new Map<string, any>()

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const busyService = inject(BusyService)

  busyService.busy()
  return next(req).pipe(
    delay(500),
    finalize(() => {
      busyService.idle()
    })
  );
};
