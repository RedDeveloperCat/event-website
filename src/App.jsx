import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VisionPage from "./components/VisionPage";
import EventsPage from "./components/EventsPage";

function App() {
  return (
    <>
    <VisionPage/>
    <EventsPage/>
    </>

  );
}

export default App;