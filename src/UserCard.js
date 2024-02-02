import UserPhoto from "./UserPhoto";
import './UserCard.css'

/**Renders components containing info about a user
 *
 * Props: user
 *
 * State: none
 *
 * UserList -> UserCard -> {UserPhoto, UserHobbies, UserInterests}
 */

function UserCard({ user }) {
  console.log("UserCard, user=", user);

  return (
    <div className="UserCard">
      { user && (<div><UserPhoto imageUrl={user.profile_image} />
      <p>Name: {user.first_name} {user.last_name}</p>
      <p>username: {user.username}</p></div>) }
    </div>
  )
}


export default UserCard;
