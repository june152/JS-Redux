import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/vanilla-redux" element={<Home />} />
          <Route path="/vanilla-redux/:id" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
