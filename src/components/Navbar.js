import React from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";



const Navbar = (props) => {
    let navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate("/login")
    }
    let location = useLocation();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">iNotebook</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input mx-4 " onClick={() => { props.toggleMode(null) }} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label " style={{color:props.mode==='dark'?'white':"white"}} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                        </div>
                        {/* <div className="bg-primary rounded-circle mx-3 " onClick={()=>{props.toggleMode('primary')}} style={{height:'30px', width:'30px',cursor:'pointer'}}></div> */}
                        <div className="bg-success rounded-circle mx-3 " onClick={() => { props.toggleMode('success') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                        <div className="bg-warning rounded-circle mx-3 " onClick={() => { props.toggleMode('warning') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                        <div className="bg-danger rounded-circle mx-3 " onClick={() => { props.toggleMode('danger') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                        
                    </div>
                    {!localStorage.getItem('token') ? <form className="d-flex">
                        <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                        <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
                    </form> : <button className="btn btn-primary mx-1" onClick={handleLogout}>Logout</button>}
                    <button className='btn btn-primary mx-1' style={{backgroundColor:"Magenta"}}>Profile</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
