import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { environment } from '@environments/environment';

/* NGRX IMPORTS */
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';

/* Módulos porsonalizados */
import { MainModule } from './layout/main/main.module';

/* Importações da Store */
import {
  metaReducers,
  reducers,
  AppState,
  CustomSerializer,
  selectRouter
} from './store'
import { InterfaceSettingsEffects } from './store/interface-settings';

/* Exportações necessarias para o restante do sistema */
export {
  AppState,
  selectRouter
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,

    /* MODULE LAYOUT */
    MainModule,

    /* NGRX IMPORTS */
    StoreModule.forRoot(reducers, { metaReducers }),
    environment.production ? [] : StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([InterfaceSettingsEffects]),
    StoreRouterConnectingModule.forRoot()
  ],
  exports: [
    MainModule,
    HttpClientModule
  ],
  providers:[
    {provide: RouterStateSerializer, useClass: CustomSerializer}
  ]
})
export class CoreModule { }
