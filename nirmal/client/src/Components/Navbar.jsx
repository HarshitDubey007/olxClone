import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../redux/user';

export default function Navbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoggedIn, userInfo } = useSelector((state) => state?.user?.value);

    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand text-success fw-bold mx-4" href="#">
                            Waffle
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">
                                        Home
                                    </Link>
                                </li>
                                {isLoggedIn ? (
                                    <li className="nav-item text-success">
                                        <Link
                                            className="nav-link"
                                            to=""
                                            onClick={(e) => {
                                                e.preventDefault()
                                                dispatch(logout());
                                            }}
                                        >
                                            Logout
                                        </Link>
                                    </li>
                                ) : (
                                    <>
                                        <li className="nav-item  fa fa-sign-out text-success">
                                            <Link className="nav-link text-success" to="/register">
                                                Register
                                            </Link>
                                        </li>
                                        <li className="nav-item ">
                                            <Link className="nav-link text-success" to="/login">
                                                Login
                                            </Link>
                                        </li>
                                    </>
                                )}
                                <li className="nav-item">
                                    <Link to="" className="nav-link text-white">
                                        English/USD <i class="fa fa-sort-desc" aria-hidden="true"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
