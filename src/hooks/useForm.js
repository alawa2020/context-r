import { useState } from 'react';

export const useForm = (initialState) => {
  const [formValues, setFormValues] = useState(initialState);

  const formValuesChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormValues(initialState);
  };

  return [formValues, formValuesChange, resetForm, setFormValues];
};
