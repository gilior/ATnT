import {Reducer} from 'redux';
import {IAppState} from '../state';
import {IAction} from '../../common/model';

export const rootReducer: Reducer<IAppState> = (state: IAppState, action: IAction) => {
  switch (action.type) {
    case'user_loaded':
      state = {...state, user: action.payload.user};
      return state;
    case'items_loaded':
      state = {...state, infections: action.payload.infections};
      return state;
    default:
      return state;
  }
  return state;
};
