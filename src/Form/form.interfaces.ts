import { ICustomComponentOptions } from '../WrapperControl/interfaces';

export interface IFormOptions {
  uiSchema: {
    id: string;
    renderer: string;
    options: { path: string; }
  }[];
  renderers: {
    id: string;
    renderer: ((options: ICustomComponentOptions<any>) => JSX.Element);
  }[];
}