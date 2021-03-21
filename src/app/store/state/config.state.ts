import {IConfig} from './config.interface';

export interface IConfigState {
  config: IConfig;
}

export const initialConfigState: IConfigState = {
  config: { jokes: []}
};
