import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { useParams, useNavigate } from "react-router-dom";
import stockMethods from "../services/stock.service";
import Nav from "../components/Nav";

const EditLsPage = () => {
  const { isLoggedIn, isLoading } = useContext(AuthContext);

  const stockId = useParams();
  const navigate = useNavigate();

  const [editNumber, setEditNumber] = useState("");
  const [editType, setEditType] = useState("");
  const [editAge, setEditAge] = useState("");
  const [editComment, setEditComment] = useState("");



  const handleEditNumber = (e) => {
    setEditNumber(e.target.value);
  };

  const handleEditType = (e) => {
    setEditType(e.target.value);
  };

  const handleEditAge = (e) => {
    setEditAge(e.target.value);
  };

  const handleEditComment = (e) => {
    setEditComment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await stockMethods.updateLs({
        stockId: stockId.stockId,
        stockNumber: editNumber,
        stockType: editType,
        age: editAge,
        comment: editComment
      })

      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteCattle = async (e) => {
    try {
      const result = await stockMethods.deleteLs({stockId: stockId.stockId})
      if (result && result.message === "cattle has been deleted") {
        navigate("/get")
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const getLiveStockDetail = async () => {
      try {
        const result = await stockMethods.getOneLsDetail(stockId);
        console.log('Frontend stockId:', stockId.stockId);

        setEditNumber(result.cattle?.stockNumber || "");
        setEditType(result.cattle?.stockType || "");
        setEditAge(result.cattle?.age || "");
        setEditComment(result.cattle?.comment || "");
      } catch (error) {
        console.log(error);
      }
    };

    getLiveStockDetail();
  }, [isLoggedIn, stockId]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-ring loading-xs"></span>
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      <Nav />
      {isLoggedIn && (
        <div className="flex flex-col items-center">
          <form onSubmit={handleSubmit}>
            <p>Edit cattle number:</p>
            <input
              type="text"
              placeholder="Live Stock Number"
              className="input input-bordered input-accent w-full max-w-xs mt-8 mb-4"
              value={editNumber}
              onChange={handleEditNumber}
            />
            <p>Edit cattle type:</p>
            <input
              type="text"
              placeholder="Live Stock Number"
              className="input input-bordered input-accent w-full max-w-xs mt-8 mb-4"
              value={editType}
              onChange={handleEditType}
            />
            <p>Edit cattle Age:</p>
            <input
              type="text"
              placeholder="Live Stock Age"
              className="input input-bordered input-accent w-full max-w-xs mt-8 mb-4"
              value={editAge}
              onChange={handleEditAge}
            />
            <p>Edit cattle comment:</p>
            <input
              type="text"
              placeholder="Live Stock Number"
              className="input input-bordered input-accent w-full max-w-xs mt-8 mb-4"
              value={editComment}
              onChange={handleEditComment}
            />
            <button className="btn btn-accent" type="submit">Edit cattle</button>
          </form>
          <button className="btn btn-error" onClick={() => {deleteCattle()}}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default EditLsPage;