import UserCard from "./UserCard";
import './UserList.css'

/**Renders a list of UserCards
 *
 * props: users [{first_name, id, last_name, profile_image, username},...]
 *
 * state: none
 *
 * BrowseUserPage -> UserList -> UserCard
 */

function UserList({ users }) {
  console.log("UserList, users=", users);

  return (
    <div className="UserList">
      <ul>
        {users.map(user => <li key={user.id}><UserCard user={user} /></li>)}
      </ul>
      <UserCard />
    </div>
  )
}


export default UserList;