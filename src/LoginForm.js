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

function LoginForm ({loginUser}) {
    const [formData, setFormData] = useState({username: '', password: ''});

    /** Update local state w/curr state of input elem */

    function handleChange(evt) {
        const { name, value } = evt.targetj;
        setFormData(fData => ({
            ...fData,
            [name]: value,
        }));
    }

    /** Call parent function and clear form */

    function handleSubmit(evt) {
        evt.preventDefault();
        handleGetStory(formData);
    }

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