import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const clone = req.clone({
      setHeaders: {Authorization: 'Basic '+btoa('admin:Admin123')}
    });
    
    return next.handle(clone);
  }

}
