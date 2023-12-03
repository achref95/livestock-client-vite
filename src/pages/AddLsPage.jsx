import { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import stockMethods from "../services/stock.service";
import Nav from "../components/Nav";


const AddLsPage = () => {
    const { isLoading, isLoggedIn } = useContext(AuthContext);
    const [stockNumber, setStockNumber] = useState("");
    const [stockType, setStockType] = useState("");
    const [message, setMessage] = useState("");

    const handleStockNumber = (e) => {
        setStockNumber(e.target.value);
      };

    const handleStockType = (e) => {
        setStockType(e.target.value);
      };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
          if (!stockType || !stockNumber) {
            alert('Please fill out all fields');
          }
          const response = await stockMethods.addStock({
            stockNumber: stockNumber,
            stockType: stockType
          })
          setStockNumber("")
          setStockType("")
          setMessage(response.message)
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
          <form onSubmit={handleSubmit} className="mt-8">
          <input 
              type="text" 
              placeholder="Live Stock Number" 
              className="input input-bordered input-accent w-full max-w-xs mr-4"
              value={stockNumber}
              onChange={handleStockNumber} 
              />
          <input 
              type="text" 
              placeholder="Live Stock Type" 
              className="input input-bordered input-accent w-full max-w-xs mr-4" 
              value={stockType}
              onChange={handleStockType}
              />
              <button 
                  className="btn btn-success"
                  onClick={handleSubmit}>
                  Add
              </button>
          </form>
          <p>{message}</p>
      </div>
      }
    </>
  )
}

export default AddLsPage
