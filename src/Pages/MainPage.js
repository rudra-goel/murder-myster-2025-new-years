import React from 'react'
import { Link } from 'react-router-dom'
import { Sanjeev } from '../Characters.js'

function MainPage() {

    return (
        <div className="main-container">
            <h1>Murder Mystery Party @ <br></br>The Goel's</h1>
            <Link to="/0B850C21FDE6CF68250F6A7D94EE2E044D9B9E3FFCFC3C638167D4E044F43362">Sanjeev Uncle</Link><br></br>
            <Link to="/05C620DFE4D7E638767479DA818EF780C6E65BEF060113DBF3613BA8B4661918">Pravin Uncle</Link><br></br>
        </div>
    )
}

export default MainPage
