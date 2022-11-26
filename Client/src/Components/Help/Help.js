import React, { useState } from 'react'
import "./Help.css"

const Help = () => {
    const [state, setState] = useState(false)

    return (
        <>
        <article id="Container" onClick={() => setState(1)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" id="Help"><path d="M96 96c-17.7 0-32 14.3-32 32s-14.3 32-32 32s-32-14.3-32-32C0 75 43 32 96 32h97c70.1 0 127 56.9 127 127c0 52.4-32.2 99.4-81 118.4l-63 24.5 0 18.1c0 17.7-14.3 32-32 32s-32-14.3-32-32V301.9c0-26.4 16.2-50.1 40.8-59.6l63-24.5C240 208.3 256 185 256 159c0-34.8-28.2-63-63-63H96zm48 384c-22.1 0-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40s-17.9 40-40 40z"/></svg>        
        </article>
        </>
    )
}

export default Help;
