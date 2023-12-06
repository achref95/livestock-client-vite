import { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import stockMethods from "../services/stock.service";
import Nav from "../components/Nav";


const EditLsPage = () => {
  const { isLoading, isLoggedIn } = useContext(AuthContext);
  const [stockNumber, setStockNumber] = useState("");

  const handleStockNumber = async (e) => {
    setStockNumber(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await stockMethods.getAllLs();
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }

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
    
    <>
      <Nav />
      {isLoggedIn && 
         <div>
            <input 
              type="text" 
              placeholder="Live Stock Number" 
              className="input input-bordered input-accent w-full max-w-xs mr-4"
              value={stockNumber}
              onChange={handleStockNumber} 
            />
            <button 
              className="btn btn-success"
              onClick={handleSubmit}>
              Display all LS
            </button>
         </div>
      }

    </>
  )
}

export default EditLsPage
