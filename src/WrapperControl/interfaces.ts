export interface ICustomComponentOptions<T> {
  formData: Record<string, any>;
  updateValue: (path: string, value: any) => void;
  options: T;
}