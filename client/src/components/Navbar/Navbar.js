import React from 'react'
import {Link,NavLink ,withRouter} from 'react-router-dom'

const Navbar=()=>{
   
    return(
        <nav className="nav wrapper blue darken-3">
            <div className="container">
                <a  className=" brand-logo ">Dashboard</a>
                <ul className="right  hide-on-med-and-down">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/courses">Courses</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>

                </ul>
            </div>
        </nav>
    )
}

export default withRouter (Navbar)