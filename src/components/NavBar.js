import React, { useContext } from 'react'
import { Link, useLocation } from "react-router-dom";
import searchContext from '../context/searchContext';

const NavBar = () => {
    let location = useLocation();
    const context = useContext(searchContext);
    const { search,setSearch } = context;
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">NewsyMedia</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location === "/" ? "active" : ""}`} aria-current="page" to="/">General</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/technology">Technology</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location === "/business" ? "active" : ""}`} to="/business">Business</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location === "/entertainment" ? "active" : ""}`} to="/entertainment">Entertainment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location === "/health" ? "active" : ""}`} to="/health">Health</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location === "/science" ? "active" : ""}`} to="/science">Science</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location === "/sports" ? "active" : ""}`} to="/sports">Sports</Link>
                        </li>
                    </ul>
                    <form className="d-flex" onSubmit={()=>{setSearch(`&q=${search}`)}}>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                            onChange={(e) => { setSearch(e.target.value) }}/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
export default NavBar