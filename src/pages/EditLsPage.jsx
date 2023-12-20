import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { useParams } from "react-router-dom";
import stockMethods from "../services/stock.service";
import Nav from "../components/Nav";

const EditLsPage = () => {
  const {isLoggedIn, isLoading} = useContext(AuthContext);
  const stockId = useParams();
  const [cattleDetail, setCattleDetail] = useState([]);

  const handleStockNumberUpdate = async (e) => {
    
  }

  useEffect(() => {
    const getLiveStockDetail = async () => {
      try {
        const result = await stockMethods.getOneLsDetail(stockId);
        console.log(result.cattle)
        setCattleDetail(result.cattle)
      } catch (error) {
        console.log(error)
      }
    }
    getLiveStockDetail()
  }, [isLoggedIn])

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
    <div>
      <Nav />
      {isLoggedIn && (
        <div>
          {/* <div>{cattleDetail?.stockNumber}</div>
          <div>{cattleDetail?.stockType}</div>
          <div>{cattleDetail?.comment}</div> */}
            <input 
              type="text" 
              placeholder="Live Stock Number" 
              className="input input-bordered input-accent w-full max-w-xs mt-8 mb-4"
              value={cattleDetail?.stockNumber}
              // onChange={handleStockNumber} 
            />
        </div>
      )}
    </div>
  )
}

export default EditLsPage
