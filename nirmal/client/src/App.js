import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Createuser from "./Createuser";
import toast, { Toaster } from "react-hot-toast";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Dashbord from "./Components/Dashbord";
import Navbar from "./Components/Navbar";
import Sell from "./Components/Sell";
import ProductDetail from "./Components/ProductDetail";
function App() {
  return (
    <>
        <Navbar />
      <Routes>
        <Route path="/" element={<Createuser />} />
        <Route path="/register" exact element={<SignUp />} />
        <Route path="/login" exact element={<SignIn />} />
        <Route path="/sell" exact element={<Sell />} />
        <Route path="/dashboard" exact element={<Dashbord />} />
        <Route path="/productdetail" exact element={<ProductDetail />} />
      </Routes>
      <div>
        <Toaster position="top-right" />
      </div>
    </>
  );
}

export default App;
