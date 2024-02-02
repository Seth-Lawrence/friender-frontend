import UserList from "./UserList";
import { useState, useEffect } from 'react';

/** Renders a list of users to view (and vote on)
 *
 * props: none
 *
 * state: none
 *
 * RoutesList -> BrowseUserPage -> UserList
 *
 */

function BrowseUserPage() {
  [users, setUsers] = useState();


  useEffect(function getUsersOnMount() {
    async function getAllUsers() {
      const resp = await fetch(`${BASE_API}/api/users`);
      const result = await resp.json();
      const usersList = result.users;
      setUsers(usersList);
    }
    getAllUsers();
  }, []);


  return (
    <div className="BrowseUserPage">
      <UserList users={users}/>
    </div>
  );
}


export default BrowseUserPage;