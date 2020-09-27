import { OverlayContainer } from '@angular/cdk/overlay';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { tap, withLatestFrom } from 'rxjs/operators';
import { actionInterfaceSettingsChangeTheme } from './interface-settings.actions';
import { selectTheme } from './interface-settings.selectors';
import { State } from './interface-settings.state'



@Injectable()
export class InterfaceSettingsEffects {
    
    constructor(
    private actions$: Actions,
    private store: Store<State>,
    private overlayContainer: OverlayContainer,
    ){}

updateTheme$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ROOT_EFFECTS_INIT, actionInterfaceSettingsChangeTheme)).pipe(
        withLatestFrom(this.store.pipe(select(selectTheme))),
        tap(([action, effectiveTheme]) => {
            const classList = this.overlayContainer.getContainerElement().classList;
            const toRemove = Array.from(classList).filter((item: string) =>
              item.includes('-theme')
            );
            if (toRemove.length) {
              classList.remove(...toRemove);
            }
            classList.add(effectiveTheme);
          })    
        ),
    { dispatch: false })
}
