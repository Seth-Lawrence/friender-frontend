import UserList from "./UserList"

/** Renders a list of users to view (and vote on)
 *
 * props: users
 *
 * state: none
 *
 * RoutesList -> BrowseUserPage -> UserList
 *
 */

function BrowseUserPage() {

  return (
    <div className="BrowseUserPage">
      <UserList />
    </div>
  )
}


export default BrowseUserPage;