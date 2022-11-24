import React from 'react'
import { useDispatch } from 'react-redux' //modify state values
import { login } from '../features/user'
import { logout } from '../features/user'


export default function () {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => {
                dispatch(login({
                    name: "vaishnave",
                    age: 20,
                    email: "vaishnavejp3@gmail.com"
                }))
            }}>
                Login
            </button>
            <button onClick={() => {
                dispatch(logout())
            }}>
                Logout
            </button>
        </ div >
    )
}
