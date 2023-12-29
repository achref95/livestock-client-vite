import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import stockMethods from "../services/stock.service";
import Nav from "../components/Nav";

const HomePage = () => {
  const { isLoggedIn, isLoading } = useContext(AuthContext);
  const [total, setTotal] = useState("")

  useEffect(() =>{
    const totalAnimals = async() => {
      try {
        if (isLoggedIn) {
          const total = await stockMethods.getAllLs()
          const totalValue = total.LiveStock.total || 0
          setTotal(totalValue)
        }
      } catch (error) {
        console.log(error)
      }
    }
    totalAnimals()
  },[isLoggedIn])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-ring loading-xs"></span>
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-lg"></span>
      </div>
    )
  } 

  return (
    isLoggedIn ? (
      <div className="bg-slate-100 h-screen">
        <Nav />
        <div className="flex items-center justify-around mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md w-40 h-40 bg-orange-300">
            <p>Total Animals: {total}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md w-40 h-40">
            <p>test</p>
          </div>
        </div>

        <div className="flex items-center justify-around mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md w-40 h-40 bg-orange-300">
            <p>Total Animals</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md w-40 h-40">
            <p>test</p>
          </div>
        </div>
      </div>
    ) : (
      <>
        <div className="hero min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <div className="flex flex-row justify-center gap-x-4 items-center">
                <h1 className="text-6xl font-bold">Cattle</h1>
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

