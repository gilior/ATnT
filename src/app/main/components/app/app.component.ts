import {Component} from '@angular/core';
import {NgRedux, select} from '@angular-redux/store';
import {IAppState} from '../../../store/state';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ATnT';
  @select('id') foo$: Observable<number>;

  constructor(public ngRedux: NgRedux<IAppState>) {
    this.foo$.subscribe((data) => {
      console.log(data);
    });
  }

  updateState(): void {
    this.ngRedux.dispatch({type: 'test', data: 1});

  }
}
