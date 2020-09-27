import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './core/store';
import { selectTheme } from './core/store/interface-settings';

@Component({
  selector: 'ngrx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  $theme!: Observable<string>

  constructor(
    private store: Store<AppState>
  ){}

  ngOnInit(){
    this.$theme = this.store.select(selectTheme)
  }

}
