import './App.css';
import Hero from './comp/hero';
import MyNavbar from './comp/MyNavbar';
import AboutUsGoals from './comp/AboutUsGoals';
import Gallery from './comp/Gallery';
import TeamPage from './pages/TeamPage';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import EventsPage from './components/EventsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="app">
                {/* This will be the homepage with all components */}
                <Routes>
                    <Route 
                        path="/" 
                        element={
                            <>
                                <MyNavbar />
                                <Hero />
                                <AboutUsGoals />
                                <EventsPage />
                                <TeamPage />
                                {/* <ContactForm /> */}
                                <Footer />
                            </>
                        } 
                    />
                    
                    {/* Gallery page will have its own Navbar and Footer */}
                    <Route 
                        path="/gallery" 
                        element={
                            <>
                                <MyNavbar />
                                <Gallery />
                                <Footer />
                            </>
                        } 
                    />
                    <Route 
                        path="/contactus" 
                        element={
                            <>
                                <MyNavbar />
                                <ContactForm />
                                <Footer />
                            </>
                        } 
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
