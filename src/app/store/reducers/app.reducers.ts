import {IAppState} from '../state/app.state';
import {ActionReducerMap} from '@ngrx/store';
import {configReducers} from './config.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  config: configReducers
};
