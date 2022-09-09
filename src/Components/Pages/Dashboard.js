import React, { useContext, useEffect } from 'react'
import { axiosPrivate } from '../../api/axios'
import AuthContext from '../../Contexts/AuthProvider'
import useMessage from '../../Hooks/useMessage'

export default function Dashboard () {
    const user = useContext(AuthContext)
    const { removeMessage } = useMessage()
    

    return ( 
        <div>
            <h1>Welcome to your dashboard {user.auth.username}</h1>
            <p>{`Hi Pearl and Margaret! I hope you like this lil app I built <3`} </p>
            <br></br>
            <p>We can build this page out more if it makes sense to manage certain things from here!</p>
        </div>
    )
}