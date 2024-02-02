import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhotoForm from './PhotoForm';
import SignupForm from './SignupForm';

const BASE_API_URL = "http://localhost:5000";

/**page for signing up
 *
 * props: none
 *
 * state: user
 */

//api call here





function SignupPage() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  function handleSignupSubmit(formData) {
    setUser({ ...formData });

  }

  async function handlePhotoSubmit(formData) {
    const resp = await fetch(`${BASE_API_URL}/api/photos`, {
      method: "POST",
      body: formData,
      mode: 'no-cors',
      // headers: { 'content-type': 'multipart/form-data' }
    });

    const result = await resp.json();

    const url = result.url;

    const userResp = await fetch(`${BASE_API_URL}/api/signup`, {
      method: 'POST',
      body: {...user, profile_image: url},
      headers: {
        'content-type': 'application/json'
      }
    })
    navigate('/')

  }





  return (

    <div>
      {user?.username
        ? <PhotoForm />
        : <SignupForm />
      }
    </div>
  );
}


export default SignupPage;