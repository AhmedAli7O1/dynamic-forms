import { createContext } from 'react';

export const FormContext = createContext({
  formData: {
    firstName: '',
    lastName: '',
    age: 0
  },
  setFormData: (formData: any) => {},
});