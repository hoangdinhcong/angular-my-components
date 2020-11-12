import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'search-with-rxjs',
    loadChildren: () => import('./search-with-rxjs/search-with-rxjs.module').then(m => m.SearchWithRxjsModule)
  },
  {
    path: 'dynamic-component',
    loadChildren: () => import('./dynamic-component-example/dynamic-component-example.module').then(m => m.DynamicComponentExampleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
