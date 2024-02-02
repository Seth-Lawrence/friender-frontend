import UserPhoto from "./UserPhoto";

/**Renders components containing info about a user
 *
 * Props: user
 *
 * State: none
 *
 * UserList -> UserCard -> {UserPhoto, UserHobbies, UserInterests}
 */

function UserCard({ user }) {

  return (
    <div className="UserCard">
      <UserPhoto imageUrl="https://friender-images-r35.s3.amazonaws.com/image.png" />
    </div>
  )
}


export default UserCard;
