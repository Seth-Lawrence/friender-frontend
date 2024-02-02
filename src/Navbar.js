import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {

  return (
    <section  className='Navigation'>
      <nav>
        <NavLink to='/'>Home </NavLink>
        <br></br>
        <NavLink to='/users'>Browse Users </NavLink>
        <br></br>
        <NavLink to='signup'>Sign-Up </NavLink>
        <br></br>
        <NavLink to='login'>Login </NavLink>
      </nav>
      <h1 className='Navigation-Header'>Friender: </h1>
      <h2 className='Navigation-Subheader'>Find your peeps</h2>
    </section>

  );
}

export default Navbar;