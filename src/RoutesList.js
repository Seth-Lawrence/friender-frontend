import {Routes, Route, Navigate} from 'react-router-dom'
import LoginPage from './LoginPage'
import Homepage from './Homepage';
import BrowseUserPage from './BrowseUserPage';
import UserProfilePage from './UserProfilePage';
import SignupPage from './SignupPage';
import PhotoForm from './PhotoForm'


/**
 * Renders Routes
 *
 * props: none
 *
 * state: none *
 *
 * App => RoutesList => {Homepage, LoginPage, BrowseUserPage,
 * UserprofilePage SignupPage} *
 */

function RoutesList() {

  return (
    <Routes>
      <Route path='/' element={<Homepage />}></Route>
      <Route path='/login' element={<LoginPage />}></Route>
      <Route path='/users' element={<BrowseUserPage />}></Route>
      <Route path='/users/:id' element={<UserProfilePage />}></Route>
      <Route path='/signup' element={<SignupPage />}></Route>
      <Route path='/users/1/photo/add' element={<PhotoForm />}></Route>
      <Route path='*' element={<Navigate to="/" />}></Route>
    </Routes>
  )
}


export default RoutesList