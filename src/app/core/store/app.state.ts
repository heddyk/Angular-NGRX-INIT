import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromInterfaceSettings from './interface-settings';
import { RouterStateUrl } from './router';

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  interfaceSettings: fromInterfaceSettings.reducer
}

export const metaReducers: MetaReducer<AppState>[] = []

export interface AppState{
  router: RouterReducerState<RouterStateUrl>
  interfaceSettings: fromInterfaceSettings.InterfaceSettingsState
}