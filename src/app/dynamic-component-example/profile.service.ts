import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { DynamicComponentExampleModule } from './dynamic-component-example.module';
import { DynamicComponentService } from './dynamic-component.service';
import { GuestProfileComponent } from './guest-profile/guest-profile.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';

@Injectable()
export class ProfileService {

  private isLoggedIn = new BehaviorSubject(false);
  isLoggedIn$ = this.isLoggedIn.asObservable();

  constructor(private dynamicComponentService: DynamicComponentService) { }

  private guestProfile(): () => Promise<typeof GuestProfileComponent> {
    return () => import('./guest-profile/guest-profile.component').then(m => m.GuestProfileComponent);
  }

  private clientProfile(): () => Promise<typeof ClientProfileComponent> {
    return () => import('./client-profile/client-profile.component').then(m => m.ClientProfileComponent);
  }

  login(): void {
    this.isLoggedIn.next(true);
  }

  logout(): void {
    this.isLoggedIn.next(false);
  }

  loadComponent(viewContainerRef: ViewContainerRef, isLoggedIn: boolean): Observable<ComponentRef<unknown>> {
    viewContainerRef.clear();

    return this.dynamicComponentService.forChild(viewContainerRef,
      { loadChildren: isLoggedIn ? this.clientProfile() : this.guestProfile() }
    );
  }

}
