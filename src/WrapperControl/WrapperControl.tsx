import { useContext } from 'react';
import { FormContext } from '../form.context';
import { ICustomComponentOptions } from './interfaces';


export function WrapperControl(component: (options: ICustomComponentOptions<any>) => JSX.Element) {
  return function Comp(props: { options: any }) {
    const { formData, setFormData } = useContext(FormContext);

    const updateValue = (path: string, value: any) => {
      const newFormData: any = { ...formData };
      newFormData[path] = value;
      setFormData(newFormData);
    }

    return component({
      formData,
      updateValue,
      options: props.options
    });
  }
}