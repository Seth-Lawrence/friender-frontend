import {NavLink, Link} from 'react-router-dom'


function Navbar() {

  return (

    <nav className='Navigation'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/users'>Browse Users</NavLink>
      <NavLink to='signup'>Sign Up</NavLink>
      <NavLink to='login'>Login</NavLink>

    </nav>

  );
}

export default Navbar;