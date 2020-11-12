import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestProfileComponent } from './guest-profile/guest-profile.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileHostDirective } from './profile-host.directive';
import { ProfileService } from './profile.service';
import { DynamicComponentService } from './dynamic-component.service';
import { DynamicComponentExampleRoutingModule } from './dynamic-component-example-routing.module';



@NgModule({
  declarations: [GuestProfileComponent, ClientProfileComponent, ProfileComponent, ProfileHostDirective],
  imports: [
    CommonModule,
    DynamicComponentExampleRoutingModule
  ],
  providers: [DynamicComponentService, ProfileService]
})
export class DynamicComponentExampleModule { }
