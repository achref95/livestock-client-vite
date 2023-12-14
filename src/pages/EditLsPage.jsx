import { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import stockMethods from "../services/stock.service";
import Nav from "../components/Nav";


const EditLsPage = () => {
  const { isLoading, isLoggedIn } = useContext(AuthContext);
  const [stockNumber, setStockNumber] = useState("");
  const [stockDetail, setStockDetail] = useState([]);
  const [display, setDisplay] = useState(false);

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
  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    setDisplay(true)
    try {
      const result = await stockMethods.getOneLs({ stockNumber });
      console.log(result.ls)
      setStockDetail(result.ls)

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
         <div className="flex flex-col items-center justify-center">
            <input 
              type="text" 
              placeholder="Live Stock Number" 
              className="input input-bordered input-accent w-full max-w-xs mt-8 mb-4"
              value={stockNumber}
              onChange={handleStockNumber} 
            />
            <button 
              className="btn btn-success btn-wide mb-4"
              onClick={handleSearchSubmit}
              >
              Search
            </button>
            <button 
              className="btn btn-success btn-wide"
              onClick={handleSubmit}>
              Display all cattles
            </button>
         </div>
         <div>
          {display && stockDetail.length > 0 && stockDetail[0] && <p>Stock Type: {stockDetail[0].stockType}</p>}
         </div>
        </div>
      }

    </>
  )
}

export default EditLsPage
