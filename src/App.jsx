import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUsGoals from "./components/about-us-goals.jsx";
import Gallery from "./components/galary.jsx";
import Events from "./components/events.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main page combines AboutUsGoals and Events */}
        <Route 
          path="/" 
          element={
            <>
              <AboutUsGoals />
              <Events />
            </>
          } 
        />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;
