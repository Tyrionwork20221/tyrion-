import { React } from "react";
import SignUpPage from "./components/SignUpPage";
import SignInPage from "./components/SignInPage";
import LandingPage from "./components/LandingPage";
import AboutUsPage from "./components/AboutUsPage";
import Rates from "./components/RatesPage";
import ShopNowPage from "./components/ShopNowPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="w-full h-full overflow-x-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/signup" element={<SignUpPage />}></Route>
          <Route path="/signin" element={<SignInPage />}></Route>
          <Route path="/about" element={<AboutUsPage />}></Route>
          <Route path="/rates" element={<Rates />}></Route>
          <Route path="/shopnow" element={<ShopNowPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
