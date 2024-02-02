import { useState } from "react";

/**Displays a form for signing up to the site
 *
 * props: handleSubmit
 *
 * state: formData
 *
 * SignupPage -> SignupForm => PhotoForm
 */

function SignupForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    first_name: "",
    last_name: ""
  });

  //TODO: Do we want to have this form on submit render the photo form, passing
  // the data as props, and then register user from photo form?

  function handleChange(evt){
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value})
  }

  function handleSubmit(evt){
    evt.preventDefault();



  }

  return (
    <form className="SignupForm" onSubmit={handleSubmit}>
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
      <label htmlFor="first_name">First Name: </label>
      <input
        id="first_name"
        name="first_name"
        type="text"
        required
        value={formData.first_name}
        onChange={handleChange}
      />
      <label htmlFor="last_name">Last Name: </label>
      <input
        id="last_name"
        name="last_name"
        type="text"
        required
        value={formData.last_name}
        onChange={handleChange}
      />
      <label htmlFor="zip_code">Zip Code </label>
      <input
        id="zip_code"
        name="zip_code"
        type="text"
        required
        value={formData.zip_code}
        onChange={handleChange}
      />
      <label htmlFor="friend_radius">Last Name: </label>
      <input
        id="friend_radius"
        name="friend_radius"
        type="number"
        required
        value={formData.friend_radius}
        onChange={handleChange}
      />

      <button>Submit</button>
    </form>
  )
}


export default SignupForm;