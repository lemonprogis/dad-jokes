import {Joke} from '../../model/joke.model';
import {IConfigState, initialConfigState} from './config.state';

export interface IAppState {
  config: IConfigState;
}

export const initialAppState: IAppState = {
  config: initialConfigState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
