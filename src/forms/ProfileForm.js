import { useState, useContext } from 'react';
import userContext from '../userContext';

/** ProfileForm
 *
 * Props:
 *  -updateProfile (cb function from App)
 *
 * State:
 *  -formData
 *
 * RouteList --> ProfileForm
 */

function ProfileForm({ updateProfile }) {
  const user = useContext(userContext);

  const [formData, setFormData] = useState(user);

  /** Update local state w/curr state of input elem */

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  /** Call parent function */

  function handleSubmit(evt) {
    evt.preventDefault();
    updateProfile(formData);
    setFormData(formData);
  }

  return (
    <form className='ProfileForm' onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor='ProfileForm-username'>Username</label>
        <input
          className='form-control'
          id='ProfileForm-username'
          name='username'
          onChange={handleChange}
          value={formData.username}
          disabled
        />
      </div>
      <div className='form-group'>
        <label htmlFor='ProfileForm-firstName'>First name</label>
        <input
          className='form-control'
          id='ProfileForm-firstName'
          name='firstName'
          onChange={handleChange}
          value={formData.firstName}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='ProfileForm-lastName'>Last name</label>
        <input
          className='form-control'
          id='ProfileForm-lastName'
          name='lastName'
          onChange={handleChange}
          value={formData.lastName}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='ProfileForm-email'>Email</label>
        <input
          className='form-control'
          id='ProfileForm-email'
          name='email'
          onChange={handleChange}
          value={formData.email}
        />
      </div>
      <button className='btn btn-primary'>Save Changes</button>
    </form>
  );

}

export default ProfileForm;