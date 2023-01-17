import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation, Navigate, useParams } from "react-router-dom";
import ShowData from './ShowData';

//npm install react-router-dom@6.3.0
// rsc
const AppRouter = () => {
    return (
        <div>
            <Router>

                <Header /> {/*Menubar */}

                <Routes>
                    <Route exact path="/" element={<Welcome />} />
                    <Route path="welcome" element={<Welcome />} />
                    <Route path="home" element={<Home />} />
                    <Route path="data/:id" element={<ShowData />} />
                    <Route path={"error"} element={<ErrorPage />} />
                    <Route path={"*"} element={<Navigate to={"/error"} state={{ message: "Path Not Available" }} />} />
                </Routes>
            </Router>
        </div>
    );
};


//Compnents (Not Children to AppRouter)

const Header = () => {
    return (
        <>
            <ul className="nav nav-pills nav-fill bg-dark text-white">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Welcome</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About Us</Link>
                </li>
            </ul>
        </>
    )

}



const Welcome = () => <h2>Hello And Welcome To This Page!</h2>

const Home = () => {


    //Where Do we want to go? Redirect?, back?
    const navigate = useNavigate();

    return (
        <>
            <h2>
                Here is the home Page!
            </h2>

            <br />

            <button className='btn btn-outline-danger' onClick={() => navigate(-1)}>Back</button>
            <button className='btn btn-outline-danger' onClick={() => navigate('/about')}>Redirect To About</button>
        </>
    )

}

const ErrorPage = () => {

    const location = useLocation();
    console.log("location in errorPage: ", location);

    return (
        <>
            Error : <b>{location.state.message}</b>
        </>
    )
}




export default AppRouter;