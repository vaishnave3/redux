import { useState } from "react"
import React from 'react'
import { theme } from "../features/theme"
import { useDispatch } from 'react-redux'

function ChangeColor() {
    const [color, setColor] = useState()
    const dispatch = useDispatch()
    return (
        <div>
            <input type="text" onChange={(e) => setColor(e.target.value)}></input>
            <button
                onClick={() => {
                    dispatch(theme(color))
                }}
            >
                Change Color
            </button>
        </div>
    )
}

export default ChangeColor