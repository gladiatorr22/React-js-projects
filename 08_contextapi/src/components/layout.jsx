import { useContext } from 'react'
import React  from 'react'
import UserContext from '../context/userContext'


function Layout() {

    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const { setUser } = useContext(UserContext);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password});
    }

  return (
    <div>
        <h2>login</h2>
        <input type="text"
        value={username}
        placeholder='username'
        onChange={(e) => setUsername(e.target.value)} />

        <input type="password"
        value={password}
        placeholder='password'
        onChange={(e) => setPassword(e.target.value)} />

        <button 
        onClick={handleSubmit}>
            submit
        </button>
    </div>
  )
}

export default Layout