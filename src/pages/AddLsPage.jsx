import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";


const AddLsPage = () => {
    const { storeToken, authenticateUser, isLoading, isLoggedIn } = useContext(AuthContext);
    const [stockNumber, setStockNumber] = useState("");
    const [stockType, setStockType] = useState("");

    const handleStockNumber = (e) => {
        setStockNumber(e.target.value);
      };

    const handleStockType = (e) => {
        setStockType(e.target.value);
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder="Type here" 
            className="input input-bordered input-accent w-full max-w-xs"
            value={stockNumber}
            onChange={handleStockNumber} 
            />
        <input 
            type="text" 
            placeholder="Type here" 
            className="input input-bordered input-accent w-full max-w-xs" 
            value={stockType}
            onChange={handleStockType}
            />
            <button 
                className="btn btn-success">
                Add
            </button>
        </form>
    </div>
  )
}

export default AddLsPage
