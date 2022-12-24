import "./App.scss";
import NavBar from "./component/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Features from "./component/page/features";
import Team from "./component/page/team";
import SignIn from "./component/page/signin";
import Home from "./component/page/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app">
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/features" element={<Features />}></Route>
            <Route exact path="/team" element={<Team />}></Route>
            <Route exact path="/signin" element={<SignIn />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
