import { useState } from 'react';
import Alert from '../Alert';

/** SignUpForm
 *
 * Props:
 *  -signUpUser (cb function from App)
 *
 * State:
 *  -formData
 *
 * RouteList --> SignUpForm
 */

function SignUpForm({ signUpUser }) {
  const initialData = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: ''
  };
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState(null);

  /** Update local state w/curr state of input elem */

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  /** Call parent function */

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await signUpUser(
        formData.username,
        formData.password,
        formData.firstName,
        formData.lastName,
        formData.email
      );
    } catch (errs) {
      setErrors(errs);
    }
  }

  return (
    <div className="SignUpForm">
      {errors !== null && <Alert messages={errors} type="danger" />}
    <form className='SignUpForm-form' onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor='SignUpForm-username'>Username</label>
        <input
          className='form-control'
          id='SignUpForm-username'
          name='username'
          onChange={handleChange}
          value={formData.username}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='SignUpForm-password'>Password</label>
        <input
          className='form-control'
          id='SignUpForm-password'
          name='password'
          onChange={handleChange}
          value={formData.password}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='SignUpForm-firstName'>First name</label>
        <input
          className='form-control'
          id='SignUpForm-firstName'
          name='firstName'
          onChange={handleChange}
          value={formData.firstName}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='SignUpForm-lastName'>Last name</label>
        <input
          className='form-control'
          id='SignUpForm-lastName'
          name='lastName'
          onChange={handleChange}
          value={formData.lastName}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='SignUpForm-email'>Email</label>
        <input
          className='form-control'
          id='SignUpForm-email'
          name='email'
          onChange={handleChange}
          value={formData.email}
        />
      </div>
      <button className='btn btn-primary'>Submit</button>
    </form>
    </div>
  );

}

export default SignUpForm;