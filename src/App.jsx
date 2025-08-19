import React, { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Button from "./Components/SearchBar/SearchBar";
import Footer from "./Components/Footer/Footer";
import SearchBar from "./Components/SearchBar/SearchBar";
import Cartpage from "./Pages/Cartpage/Cartpage";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Product from "./Pages/Product/Product";
import Login from "./Pages/Login/Login";

const App = () => {
  const location = useLocation();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();


  useEffect(()=>{

    if(!token){
      navigate("/login")
    }

  }, [location]);

  return (
    <>
      {
        location.pathname !== "/login" &&  <Navbar />
      }
     

      <Routes>
       
        <Route path="/" element={<Dashboard />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cartpage />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
