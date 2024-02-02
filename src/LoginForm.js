import { useState } from "react";
import './LoginForm.css';

/**Displays form for logging in and tracks changes
 *
 * Props: submitAction
 *
 * State: formData
 *
 * LoginPage -> LoginForm
 */

function LoginForm({ submitAction }) {

  const [formData, setFormData] = useState({username:"", password:""});

  function handleChange(evt){
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value})
  }

  function handleSubmit(evt){
    evt.preventDefault();
    submitAction(formData);
  }

  return (
    <form className="LoginForm" onSubmit={handleSubmit}>
      <label htmlFor="username">Username: </label>
      <input
        id="username"
        name="username"
        type="text"
        required
        value={formData.username}
        onChange={handleChange}
      />
      <label htmlFor="password">Password: </label>
      <input
        id="password"
        name="password"
        type="password"
        required
        value={formData.password}
        onChange={handleChange}
      />
    <button className='LoginForm-Btn'>
      Submit
    </button>
    </form>
  )
}


export default LoginForm;