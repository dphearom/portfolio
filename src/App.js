import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import Home from "./Home/home.js"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
