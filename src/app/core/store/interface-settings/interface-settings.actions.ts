import { createAction, props } from '@ngrx/store';

export const actionInterfaceSettingsChangeTheme = createAction(
  '[INTERFACE SETTINGS] Change Theme',
  props<{theme: string}>()
)