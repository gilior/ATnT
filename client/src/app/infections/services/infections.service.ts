import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {IInfection, IUser} from '../../common/model';
import {HttpClient} from '@angular/common/http';
import {NgRedux} from '@angular-redux/store';
import {IAppState} from '../../store/state';

@Injectable({
  providedIn: 'root'
})
export class InfectionsService {

  constructor(private httpClient: HttpClient, private  ngRedux: NgRedux<IAppState>) {
  }


  public getUserDetails(id: number): Observable<IUser> {
    return this.httpClient.get<IUser>(`api/user/${id}`);
  }

  public getUserInfections(id: number): Observable<IInfection[]> {
    return this.httpClient.get<IInfection[]>(`api/user/${id}/infections`);
  }

  getInfection(id: number): IInfection {
    let inf = this.ngRedux.getState().infections.find(i => i.id === id);
    return inf;
  }
}
