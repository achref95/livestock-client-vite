import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import stockMethods from "../services/stock.service";
import Nav from "../components/Nav";


const LsPage = () => {
  const { isLoading, isLoggedIn } = useContext(AuthContext);
  const [stockNumber, setStockNumber] = useState("");
  const [stockDetail, setStockDetail] = useState([]);
  const [allCattle, setAllCattle] = useState([]);
  const [display, setDisplay] = useState(false);

  const navigate = useNavigate();

  const handleStockNumber = async (e) => {
    setStockNumber(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisplay(true)
    setStockDetail([])
    try {
      const result = await stockMethods.getAllLs();
      setAllCattle(result.LiveStock.result)
    } catch (error) {
      console.log(error)
    }
  }
  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    setDisplay(true)
    setAllCattle([])
    try {
      const result = await stockMethods.getOneLs({ stockNumber });
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
      <div className="bg-slate-100 h-screen">
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
          
         {display && stockDetail?.length > 0 && (
            <div className="mt-8">
            <p className="text-lg font-bold text-slate-600 ml-4 mt-4">
              Stock Number: {stockDetail[0].stockNumber}
            </p>
            <p className="text-lg font-bold text-slate-600 ml-4 mt-4">
              Stock Type: {stockDetail[0].stockType}
            </p>
            <p className="text-lg font-bold text-slate-600 ml-4 mt-4">
              Comment: {stockDetail[0].comment}
            </p>
            <button 
              className="btn btn-success ml-8 mt-8" 
              onClick={() => { navigate(`/get/${stockDetail[0]._id}`)}}
              >
              Edit cattle</button>
          </div>
          )}
         </div>
         <div>
          {display && allCattle?.length > 0 && (
            <div className="overflow-x-auto mb-8 bg-slate-100 h-screen">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Stock Number</th>
                    <th>Stock Type</th>
                    <th>Comment</th>
                  </tr>
                </thead>
                <tbody>
                  {allCattle.map((cattle, index) => (
                    <tr key={cattle._id}>
                      <th>{index + 1}</th>
                      <td>
                        {/* Use the Link component instead of an anchor tag */}
                        <Link to={`/get/${cattle._id}`}>
                          {cattle.stockNumber}
                        </Link>
                      </td>
                      <td>{cattle.stockType}</td>
                      <td>{cattle.comment}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        </div>
      }

    </>
  )
}

export default LsPage