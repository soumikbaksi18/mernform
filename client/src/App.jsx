import React from 'react';
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


const App = () => {
  return (
    <>
        <Routes>
        <Route  path="/" element={<Home />}  />
        </Routes>
    </>
  )
}

export default App