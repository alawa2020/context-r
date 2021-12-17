import React, { useContext, useEffect } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useForm } from '../hooks/useForm';

const LoginScreen = () => {
  const { user, setUser } = useContext(UserContext);

  const [formValues, formValuesChange, resetForm, setFormValues] = useForm({
    name: '',
    age: '',
  });

  const { name, age } = formValues;

  useEffect(() => {
    setValuesFormContext();
  }, []);

  const setValuesFormContext = () => {
    if (!!Object.keys(user).length) {
      setFormValues({
        name: user.name,
        age: user.age,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim().length > 2) {
      setUser({
        name,
        age,
      });
      alert('user establecido!');
      return;
    }
    alert('complete los cmapos!');
  };

  const clearForm = () => {
    resetForm();
  };

  return (
    <div>
      <h1>Login Screen</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          type="text"
          placeholder="su nombre..."
          name="name"
          value={name}
          onChange={formValuesChange}
        />
        <input
          className="form-control mb-3"
          type="number"
          placeholder="su edad..."
          name="age"
          value={age}
          onChange={formValuesChange}
        />

        <input className="btn btn-success mr-3" type="submit" value="Login" />

        <button type="button" className="btn btn-primary" onClick={clearForm}>
          Limpiar
        </button>
      </form>
    </div>
  );
};

export default LoginScreen;
