import React from 'react';

const LoginScreen = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1>Login Screen</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          type="text"
          placeholder="su nombre..."
        />
        <input
          className="form-control mb-3"
          type="number"
          placeholder="su edad..."
        />

        <input className="btn btn-primary" type="submit" value="Login" />
      </form>
    </div>
  );
};

export default LoginScreen;
