import { Injectable } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { User } from '../_models/user';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class MemberListResolver implements Resolve<User[]> {
  constructor(private userService: UserService,
    private router: Router, private altertify: AlertifyService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User[]> {
    return this.userService.getUsers().pipe(
      catchError(error => {
        this.altertify.error('Data not retrieved!');
        this.router.navigate(['/home']);
        return of(null);
      })
    );
  }
}
