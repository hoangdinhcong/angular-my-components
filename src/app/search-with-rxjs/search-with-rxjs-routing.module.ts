import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchWithRxjsComponent } from './search-with-rxjs.component';

const routes: Routes = [{ path: '', component: SearchWithRxjsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchWithRxjsRoutingModule { }
