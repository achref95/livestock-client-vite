import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const { isLoggedIn, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    // <div className="navbar bg-green-800 text-neutral-content">
    //   <button 
    //     className="btn btn-ghost text-xl mr-auto"
    //     onClick={() => {navigate("/")}}>
    //     LiveStock App
    //     </button>
    //   {isLoggedIn &&       
    //     <button className="btn btn-error" onClick={() => { 
    //       logOutUser(); 
    //       navigate("/"); 
    //       }}>
    //         Log Out
    //     </button> }

    // </div>
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div> 
          <div className="flex-1 px-2 mx-2" onClick={() => {navigate("/")}}>Live Stock App</div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li><a>Navbar Item 1</a></li>
              <li><a>Navbar Item 2</a></li>
            </ul>
          </div>
        </div>
      </div> 
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          <li><button className="btn btn-active mb-4" onClick={() => {navigate("/add")}}>Add cattle</button></li>
          <li><button className="btn btn-active mb-8" onClick={() => {navigate("/get")}}>Cattle stock</button></li>
          <li> {isLoggedIn &&       
            <button className="btn btn-error" onClick={() => { 
              logOutUser(); 
              navigate("/"); 
              }}>
                Log Out
            </button> }
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
