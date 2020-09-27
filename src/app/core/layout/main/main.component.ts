import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { AppState } from '@app/core/store';
import { actionInterfaceSettingsChangeTheme } from '@app/core/store/interface-settings';
import { Store } from '@ngrx/store';

@Component({
  selector: 'ngrx-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
  }

  changeTheme(event: MatSlideToggleChange){
    if(event.checked){
      this.store.dispatch(actionInterfaceSettingsChangeTheme({theme: 'DARK-THEME'}))
    }else{
      this.store.dispatch(actionInterfaceSettingsChangeTheme({theme: 'LIGHT-THEME'}))
    }
  }

}
