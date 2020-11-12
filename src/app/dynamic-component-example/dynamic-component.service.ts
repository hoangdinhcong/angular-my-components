import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export interface ComponentLoader {
  loadChildren: () => Promise<any>;
}

@Injectable()
export class DynamicComponentService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  forChild(viewContainerRef: ViewContainerRef, componentLoader: ComponentLoader): Observable<ComponentRef<unknown>> {
    return from(componentLoader.loadChildren()).pipe(
      map((component: any) => this.componentFactoryResolver.resolveComponentFactory(component)),
      map((componentFactory: ComponentFactory<unknown>) => viewContainerRef.createComponent(componentFactory))
    );
  }
}
