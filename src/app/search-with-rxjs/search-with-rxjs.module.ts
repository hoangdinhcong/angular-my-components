import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SearchWithRxjsRoutingModule } from './search-with-rxjs-routing.module';
import { SearchWithRxjsComponent } from './search-with-rxjs.component';


@NgModule({
  declarations: [SearchWithRxjsComponent],
  imports: [
    CommonModule,
    HttpClientModule,

    SearchWithRxjsRoutingModule
  ]
})
export class SearchWithRxjsModule { }
