import './App.css'
import './js/script'
import About from './components/About'
import Home from './components/Home'
import Navbar from "./components/Navbar"
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
