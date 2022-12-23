import "./App.scss";
import Navbar from "./component/Navbar";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./component/page/about";
import Service from "./component/page/service";
import Home from "./component/page/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/service" element={<Service />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
