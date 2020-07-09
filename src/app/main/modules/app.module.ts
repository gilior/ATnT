import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgRedux, NgReduxModule} from '@angular-redux/store';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from '../components/app/app.component';
import {rootReducer} from '../../store/reducers/reducers';
import {IAppState} from '../../store/state';
// import { TopBarComponent } from '../../common/components/top-bar/top-bar.component';
// import { SideBarComponent } from '../../common/components/side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    // TopBarComponent,
    // SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer,{infections:null,user:null});

  }
}
