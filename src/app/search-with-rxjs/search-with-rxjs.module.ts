import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchWithRxjsRoutingModule } from './search-with-rxjs-routing.module';
import { SearchWithRxjsComponent } from './search-with-rxjs.component';


@NgModule({
  declarations: [SearchWithRxjsComponent],
  imports: [
    CommonModule,
    SearchWithRxjsRoutingModule
  ]
})
export class SearchWithRxjsModule { }
