import {Component, OnInit} from '@angular/core';
import {NgRedux, select} from '@angular-redux/store';
import {Observable} from 'rxjs';
import {IInfection, IUser} from '../../../common/model';
import {InfectionsService} from '../../services/infections.service';
import {IAppState} from '../../../store/state';

@Component({
  selector: 'host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss']
})
export class HostComponent implements OnInit {
  @select('infections') infections$: Observable<IInfection[]>;
  @select('user') user$: Observable<IUser>;

  constructor(private  infectionsService: InfectionsService, private  ngRedux: NgRedux<IAppState>) {

  }

  ngOnInit(): void {

    this.infectionsService.getUserDetails(10)
      .subscribe((usr) => {
        this.ngRedux.dispatch({type: 'user_loaded', payload: usr});
      });

    this.infectionsService.getUserInfections(10)
      .subscribe((infections) => {
        this.ngRedux.dispatch({type: 'items_loaded', payload: infections});
      });
  }

}
