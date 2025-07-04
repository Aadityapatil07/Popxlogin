import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Register from "./components/Register";
import Login from "./components/Login"
import { AppProvider } from "./context/AppContext"; 
import UserData from "./components/UseData";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          {/* Add other routes here */}
           <Route path="/user-data" element={<UserData />} /> {/* Add this line */}
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;