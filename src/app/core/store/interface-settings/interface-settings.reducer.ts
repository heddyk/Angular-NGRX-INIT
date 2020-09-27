import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { actionInterfaceSettingsChangeTheme } from './interface-settings.actions';
import { InterfaceSettingsState } from './interface-settings.model';


export const initialState: InterfaceSettingsState = {
  theme: 'DARK-THEME'
}

export const reducer  = createReducer(
  initialState,
  on(actionInterfaceSettingsChangeTheme, (state, action) => ({...state, theme: action.theme}))
)