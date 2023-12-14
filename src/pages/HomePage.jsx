import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import Nav from "../components/Nav";

const HomePage = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    isLoggedIn ? (
      <>
        <Nav />
        <div>
          <h1>hello livestock app</h1>
        </div>
      </>
    ) : (
      <>
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <div className="flex flex-row justify-center gap-x-4 items-center">
            <h1 className="text-6xl font-bold">Fi𝓣rack</h1>
          </div>

          <p className="py-6 text-lg">
            The best way to track your fitness progress! For the coach and
            for clients!
          </p>
          <img src="/src/assets/cattle.jpg" alt="cow" />

          {isLoggedIn ? (
            <Link to="/overview">
              <button className="btn btn-wide btn-primarybtn-outline mt-4">
                Overview page
              </button>
            </Link>
          ) : (
            <div className="flex flex-col mt-4 space-y-4">
              <Link to="/signup">
                <button className="btn btn-wide btn-outline">
                  Sign up
                </button>
              </Link>
              <Link to="/login">
                <button className="btn btn-info btn-wide">Login</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
      </>
    )
  );
};

export default HomePage;

