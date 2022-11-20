export interface IFormOptions {
  uiSchema: {
    id: string;
    renderer: string;
    options: { path: string; }
  }[];
  renderers: {
    id: string;
    renderer: (props: { options: any }) => JSX.Element;
  }[];
}
