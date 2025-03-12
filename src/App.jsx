import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VisionPage from "./components/VisionPage";
import EventsPage from "./components/EventsPage";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <>
    <VisionPage/>
    <EventsPage/>
    <ContactForm/>
    </>

  );
}

export default App;