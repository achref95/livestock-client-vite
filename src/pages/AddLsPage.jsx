import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import stockMethods from "../services/stock.service";
import Nav from "../components/Nav";


const AddLsPage = () => {
    const { isLoading, isLoggedIn } = useContext(AuthContext);
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

        try {
          if (!stockType || !stockNumber) {
            alert('Please fill out all fields');
          }
          const response = await stockMethods.addStock({
            stockNumber: stockNumber,
            stockType: stockType
          })

            console.log(response)
        } catch (error) {
          console.log(error)
        }
    }


  return (
    <>
      <Nav />
      <div>
          <form onSubmit={handleSubmit}>
          <input 
              type="text" 
              placeholder="Live Stock Number" 
              className="input input-bordered input-accent w-full max-w-xs"
              value={stockNumber}
              onChange={handleStockNumber} 
              />
          <input 
              type="text" 
              placeholder="Live Stock Type" 
              className="input input-bordered input-accent w-full max-w-xs" 
              value={stockType}
              onChange={handleStockType}
              />
              <button 
                  className="btn btn-success"
                  onClick={handleSubmit}>
                  Add
              </button>
          </form>
      </div>
    </>
  )
}

export default AddLsPage
