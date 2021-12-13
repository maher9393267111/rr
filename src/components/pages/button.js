import React from 'react'
import   '../styled/entry.css'
export default function button({title,handleAction}) {
    return (
        <div>
            <button onClick={handleAction} className=' btn1 '>{title}</button>
        </div>
    )
}
