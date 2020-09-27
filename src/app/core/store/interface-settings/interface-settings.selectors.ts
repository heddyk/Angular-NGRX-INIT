import { createSelector } from '@ngrx/store';
import { selectInterfaceSettingsState } from '../app.selectors';
import { InterfaceSettingsState } from './interface-settings.model';

export const selectInterfaceSettings = createSelector(
  selectInterfaceSettingsState,
  (state: InterfaceSettingsState) => state
)

export const selectTheme = createSelector(
  selectInterfaceSettings,
  (state: InterfaceSettingsState) => state.theme.toLowerCase()
)