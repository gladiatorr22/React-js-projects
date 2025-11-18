
import { useContext } from 'react'
import UserContext from '../context/userContext'

function Profile() {
    const {user} = useContext(UserContext);
    if(!user){
        return <div>no user found</div>
    }
  return (
    <div>profile:{user.username}</div>
  )
}

export default Profile