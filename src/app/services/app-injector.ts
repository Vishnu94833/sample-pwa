import { Injector, Type, InjectionToken, AbstractType, InjectFlags } from '@angular/core';
import { ProductService } from './product.service';

let _appInjector: Injector;

// The AppInjector would normally consist only of the setAppInjector function and the exportet variable:
//   export let AppInjector: Injector;
// Because Karma/Jasmine unit tests have problems accessing exportet variables, the AppInjector
// implementation is changed into a class with a static "get" method. In that way, unit tests work and
// existing implementations can stay unchanged.

export class AppInjector {
  static get<T>(token: Type<T> | InjectionToken<T> | AbstractType<T> , notFoundValue?: T, flags?: InjectFlags): T {
    return _appInjector.get(token, notFoundValue, flags);
  }
}

export function setAppInjector(injector: Injector): void {
  if (_appInjector) {
    console.error('Failure: AppInjector already set!');
  } else {
    _appInjector = injector;
  }
}