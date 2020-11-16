import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselComponent } from './carousel/carousel.component';
import { CarouselExampleRoutingModule } from './carousel-example-routing.module';
import { CarouselExampleComponent } from './carousel-example.component';



@NgModule({
  declarations: [CarouselComponent, CarouselExampleComponent],
  imports: [
    CommonModule,
    CarouselExampleRoutingModule
  ]
})
export class CarouselExampleModule { }
