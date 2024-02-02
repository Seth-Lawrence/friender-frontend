import UserCard from "./UserCard";

/**Renders a list of UserCards
 *
 * props: users
 *
 * state: none
 *
 * BrowseUserPage -> UserList -> UserCard
 */

function UserList({ users }) {

  return (
    <div className="UserList">
      <UserCard />
    </div>
  )
}


export default UserList;