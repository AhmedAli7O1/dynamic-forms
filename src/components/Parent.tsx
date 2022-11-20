import React, { useContext } from 'react';
import { FormContext } from '../form.context';

export function Parent(component: any) {
  return function Comp(props: { options: any }) {
    const { formData, setFormData } = useContext(FormContext);

    const updateValue = (path: string) => {
      return function(value: any) {
        const newFormData: any = { ...formData };
        newFormData[path] = value;
        setFormData(newFormData);
      }
    }

    return component({
      formData,
      updateValue,
      options: props.options
    });
  }
}