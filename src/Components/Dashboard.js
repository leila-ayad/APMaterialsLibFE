import React, { useContext } from 'react'
import AuthContext from '../Contexts/AuthProvider'

export default function Dashboard () {
    const user = useContext(AuthContext)

    return ( 
        // some kinda nav bar with logout button, return to the picnic page, back button if on specific material   
        <div>
            <h1>Welcome to your dashboard {user.auth.username}</h1>
            <p>This is where you manage all your AP things from</p>
        </div>
    )
}