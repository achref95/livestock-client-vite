import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage"
import AddLsPage from "./pages/AddLsPage";
import LsPage from "./pages/LsPage";
import EditLsPage from "./pages/EditLsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/add" element={<AddLsPage />} />
        <Route path="/get" element={<LsPage />} />
        <Route path="/get/:stockId" element={<EditLsPage />} />
      </Routes>
    </>
  );
}

export default App;
