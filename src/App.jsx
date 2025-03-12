import './App.css'
import Hero from './comp/hero'
import MyNavbar from './comp/MyNavbar'
import AboutUsGoals from './comp/AboutUsGoals'
import Gallery from './comp/Gallery'
import TeamPage from './pages/TeamPage'
import ContactForm from './components/ContactForm'
import Footer from "./components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import EventsPage from './components/EventsPage'


function App() {
    return (
    <>
      <div className="app">
      <MyNavbar />
      <Hero />
      <AboutUsGoals />
      <Gallery />
      <EventsPage />
      <TeamPage />
      <ContactForm/>
      <Footer/>
      </div>
    </>
  )
}

export default App
