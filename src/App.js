import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Footter/Footer";
import SignIn from "./Components/SignUp_SignIn/SignIn";
import CategorySelected from "./Pages/CategorySelected";
import Account from "./Components/AccountDetail/Account";
import Cart from "./Components/ShoppingCart/Cart";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/category/:category" element={<CategorySelected />} />
        <Route path="/login" element={<SignIn page={true} />} />
        <Route path="/signup" element={<SignIn page={false} />} />
        <Route path="/account" element={<Account/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
