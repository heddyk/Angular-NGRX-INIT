import { AppState } from '../app.state';
import { InterfaceSettingsState } from './interface-settings.model';

export interface State extends AppState{
  interfaceSettings: InterfaceSettingsState
}