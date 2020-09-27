import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector } from '@ngrx/store';
import { AppState } from './app.state';
import { InterfaceSettingsState } from './interface-settings/interface-settings.model';
import { RouterStateUrl } from './router';

export const selectRouter = createFeatureSelector<
  AppState,
  RouterReducerState<RouterStateUrl>
>('router')

export const selectInterfaceSettingsState = createFeatureSelector<
  AppState,
  InterfaceSettingsState
>('interfaceSettings')