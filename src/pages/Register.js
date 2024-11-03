import React from 'react';
import { useForm } from 'react-hook-form';
import { registerUser } from '../services/userService';

function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await registerUser(data);
      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.message || 'Registration failed');
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form-group">
        <div className="mb-3">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
          />
          {errors.email && <p className="text-danger">{errors.email.message}</p>}
        </div>
  
        <div className="mb-3">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters long' } })}
          />
          {errors.password && <p className="text-danger">{errors.password.message}</p>}
        </div>
  
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
  
}

export default Register;
