import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarouselExampleComponent } from './carousel-example.component';


const routes: Routes = [{ path: '', component: CarouselExampleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarouselExampleRoutingModule { }
