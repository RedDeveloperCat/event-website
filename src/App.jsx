import './App.css'
import Hero from './comp/hero'
import MyNavbar from './comp/MyNavbar'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
    <>
      <div className="app">
      <MyNavbar />
      <Hero />
      </div>
    </>
  )
}

export default App
