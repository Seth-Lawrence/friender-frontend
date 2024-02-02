import UserList from "./UserList";
import { useState, useEffect } from 'react';
const BASE_API = "http://localhost:5000";

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
  console.log("BrowseUserPage");
  const [users, setUsers] = useState();
  const [isLoading, setIsLoading] = useState(true);


  useEffect(function getUsersOnMount() {
    async function getAllUsers() {
      const resp = await fetch(`${BASE_API}/api/users`);
      const result = await resp.json();
      const usersList = result.users;
      setUsers(usersList);
      setIsLoading(false)
    }
    getAllUsers();
  }, []);


  return (
    <div className="BrowseUserPage">
      { isLoading ? <p>Loading...</p> : <UserList users={users}/> }
    </div>
  );
}


export default BrowseUserPage;