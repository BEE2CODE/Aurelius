import CustomNavbar from "./components/CustomNavbar";
import HomeText from "./components/HomeText";
import './App.css'
import ProductLists from "./components/ProductLists";
import Footer from "./components/Footer";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";


function App() {
  return (
  <>
  <div className="font">
    <div className="Satoshi"></div>
    <Routers>
      <Routes>
        
      </Routes>
    </Routers>
  </div>
    <CustomNavbar />
    <HomeText />
    <ProductLists />
    <Footer />
  </>
  );
}

export default App;
