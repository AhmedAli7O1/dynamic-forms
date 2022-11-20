import React, { useMemo, useState } from 'react';
import { FormContext } from '../form.context';
import './Form.css';
import { IFormOptions } from './form.interfaces';


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
              const { renderer: Renderer } = renderers.find(x => x.id === element.renderer)!;
              return <Renderer key={element.id} options={element.options} />;
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