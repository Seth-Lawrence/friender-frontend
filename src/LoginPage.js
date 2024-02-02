import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";

const BASE_API_URL = "http://localhost:5000";

/**Handles logging a user in
 *
 * Props: None
 *
 * State: None
 *
 * RoutesList -> LoginPage -> LoginForm
 */

function LoginPage() {

  const navigate = useNavigate("/");

  async function loginSubmit(formData){
    const resp = await fetch(`${BASE_API_URL}/api/signup`, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'content-type': 'application/json'
        }
    });
    const result = await resp.json();
    const token = result.token;
    navigate("/");
  }

  return (
    <div>
      <LoginForm submitAction={loginSubmit} />
    </div>
  )
}


export default LoginPage;