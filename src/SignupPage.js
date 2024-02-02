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
    // mode: 'no-cors',
    // headers: { 'content-type': 'multipart/form-data' }
  });

  console.log("RESPONSE,", resp);

  const result = await resp.json();

  const url = result.URL;

  console.log("BEFORE SIGNUP REQUEST, url=", url);

  const userResp = await fetch(`${BASE_API_URL}/api/signup`, {
    method: 'POST',
    body: JSON.stringify({...user,
      friend_radius: Number(user.friend_radius),
      profile_image: url}),
    headers: {
      'content-type': 'application/json'
      }
  });
  navigate('/');

}





return (

  <div>
    {user?.username
      ? <PhotoForm submitAction={handlePhotoSubmit}/>
      : <SignupForm submitAction={handleSignupSubmit} />
    }
  </div>
);
}


export default SignupPage;