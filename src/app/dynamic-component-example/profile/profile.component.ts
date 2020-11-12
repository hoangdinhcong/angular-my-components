import { Component, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { mergeMap, takeUntil } from 'rxjs/operators';

import { ProfileHostDirective } from '../profile-host.directive';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  @ViewChild(ProfileHostDirective, { static: true }) profileHost: ProfileHostDirective;
  private destroy$ = new Subject();

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    const viewContainerRef = this.profileHost.viewContainerRef;
    debugger;
    this.profileService.isLoggedIn$.pipe(
      takeUntil(this.destroy$),
      mergeMap((isLoggedIn: boolean) => this.profileService.loadComponent(viewContainerRef, isLoggedIn))
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
