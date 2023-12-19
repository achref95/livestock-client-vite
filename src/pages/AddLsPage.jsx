import { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import stockMethods from "../services/stock.service";
import Nav from "../components/Nav";


const AddLsPage = () => {
    const { isLoading, isLoggedIn } = useContext(AuthContext);
    const [stockNumber, setStockNumber] = useState("");
    const [stockType, setStockType] = useState("");
    const [comment, setComment] = useState("");
    const [message, setMessage] = useState("");

    const handleStockNumber = (e) => {
        setStockNumber(e.target.value);
      };

    const handleStockType = (e) => {
        setStockType(e.target.value);
      };

    const handleComent =(e) => {
        setComment(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
          if (!stockType || !stockNumber) {
            alert('Please fill out all fields');
          }
          const response = await stockMethods.addStock({
            stockNumber: stockNumber,
            stockType: stockType,
            comment: comment
          })
          setStockNumber("")
          setStockType("")
          setComment("")
          setMessage(response.message)

          setTimeout(() => {
            setMessage("");
          }, 5000);
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
  {isLoggedIn && (
    <div className="flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit} className="mt-8">
        <div className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Live Stock Number"
            className="input input-bordered input-accent w-full max-w-xs mb-4"
            value={stockNumber}
            onChange={handleStockNumber}
          />
          <input
            type="text"
            placeholder="Live Stock Type"
            className="input input-bordered input-accent w-full max-w-xs mb-4"
            value={stockType}
            onChange={handleStockType}
          />
          <input
            type="text"
            placeholder="Live Stock Comment"
            className="input input-bordered input-accent w-full max-w-xs mb-4"
            value={comment}
            onChange={handleComent}
          />
          <button className="btn btn-success btn-wide" type="submit">
            Add
          </button>
        </div>
      </form>
      <p className="text-green-600">{message}</p>
    </div>
  )}
</>


  )
}

export default AddLsPage
