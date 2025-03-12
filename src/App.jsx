import './App.css'
import Hero from './comp/hero'
import MyNavbar from './comp/MyNavbar'
import AboutUsGoals from './comp/AboutUsGoals'
import Gallery from './comp/Gallery'
import TeamPage from './pages/TeamPage'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
    <>
      <div className="app">
      <MyNavbar />
      <Hero />
      <AboutUsGoals />
      <Gallery />
      <TeamPage />
      </div>
    </>
  )
}

export default App
