import React, { useMemo, useState } from 'react';
import { FormContext } from '../form.context';
import './Form.css';
import { Text } from '../components/Text';
import { IFormOptions } from './form.interfaces';
import { WrapperControl } from '../WrapperControl/WrapperControl';



export function Form ({ renderers, uiSchema }: IFormOptions) {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: 0
  });


  const value: any = useMemo(
    () => ({ formData, setFormData }), 
    [formData]
  );

  return (
    <FormContext.Provider value={value}>
      <form onSubmit={(e) => { e.preventDefault(); }}>

        <>
          {
            uiSchema.map((element) => {
              const rd = renderers.find(x => x.id === element.renderer)!;
              const Comp = WrapperControl(rd.renderer);
              
              return (
                <Comp key={element.id} options={element.options} />
              );
            })
          }
        </>

        <button onClick={() => {
          console.log(formData);
        }}>
          Show
        </button>
      </form>
    </FormContext.Provider>
  );
}