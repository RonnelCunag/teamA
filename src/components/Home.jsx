import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h1>This is the homepage.</h1>
            <Link to="/">
                <button>Home</button>
            </Link>
            <Link to="/register">
                <button>Register</button>
            </Link>
            <Link to="/login">
                <button>Login</button>
            </Link>
        </>
    )
}

export default Home;