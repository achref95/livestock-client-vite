import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const { isLoggedIn, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="navbar bg-green-800 text-neutral-content">
      <button 
        className="btn btn-ghost text-xl mr-auto"
        onClick={() => {navigate("/")}}>
        LiveStock App
        </button>
      {isLoggedIn &&       
        <button className="btn btn-error" onClick={() => { 
          logOutUser(); 
          navigate("/"); 
          }}>
            Log Out
        </button> }

    </div>
  );
};

export default Nav;
