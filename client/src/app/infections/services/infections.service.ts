import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {IInfection, IUser} from '../../common/model';
import {HttpClient} from '@angular/common/http';
import {NgRedux} from '@angular-redux/store';
import {IAppState} from '../../store/state';
import {Route, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InfectionsService {

  constructor(private httpClient: HttpClient, private  ngRedux: NgRedux<IAppState>, private router: Router) {
  }


  public getUserDetails(id: number): Observable<IUser> {
    return this.httpClient.get<IUser>(`api/user/${id}`);
  }

  public getUserInfections(id: number): Observable<IInfection[]> {
    return this.httpClient.get<IInfection[]>(`api/user/${id}/infections`);
  }

  getInfection(id: number): IInfection {
    if (this.ngRedux.getState().infections == null) {
      this.router.navigate(['../']);
    } else {
      let inf = this.ngRedux.getState().infections.find(i => i.id === id);
      return inf;
    }

  }
}
