import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useForm } from '../hooks/useForm';

const LoginScreen = () => {
  const { setUser } = useContext(UserContext);

  const [formValues, formValuesChange, resetForm] = useForm({
    name: '',
    age: '',
  });

  const { name, age } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({
      name,
      age,
    });
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

        <input className="btn btn-primary" type="submit" value="Login" />
      </form>
    </div>
  );
};

export default LoginScreen;
