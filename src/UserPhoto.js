/**Renders div containing user photo
 *
 * Props: imageUrl - a string
 *
 * State: none
 *
 * UserCard -> UserPhoto
 */


function UserPhoto({ imageUrl }) {

  return (
    <div className="UserPhoto">
      <img src={imageUrl} alt="Profile picture" />
    </div>
  )
}


export default UserPhoto;