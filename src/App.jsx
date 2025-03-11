import './App.css'
import Hero from './comp/hero'
import MyNavbar from './comp/MyNavbar'
import AboutUsGoals from './comp/AboutUsGoals'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
    <>
      <div className="app">
      <MyNavbar />
      <Hero />
      <AboutUsGoals />
      </div>
    </>
  )
}

export default App
