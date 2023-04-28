import { useState } from 'react';

/** Login Form
 *
 * Props:
 *  -loginUser (cb function from parent)
 *
 * State:
 *  -formData
 *
 * RouteList --> LoginForm
 */

function LoginForm({ loginUser }) {
  const initialData = { username: '', password: '' };
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

  /** Call parent function and clear form */

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await loginUser(formData.username, formData.password);
    } catch(err) {
      console.error(err);
      setErrors(err);
    }
  }
 
  //TODO: handle error messages
  
  return (
    <form className='LoginForm' onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor='LoginForm-username'>Username</label>
        <input
          className='form-control'
          id='LoginForm-username'
          name='username'
          onChange={handleChange}
          value={formData.username}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='LoginForm-password'>Password</label>
        <input
          className='form-control'
          id='LoginForm-password'
          name='password'
          onChange={handleChange}
          value={formData.password}
        />
      </div>
      <button className='btn btn-primary'>Submit</button>
    </form>
  );

}

export default LoginForm;