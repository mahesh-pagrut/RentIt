import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import './App.css'
import Companies from './components/Companies/Companies'
import Residencies from './components/Residencies/Residencies'
import Value from './components/Value/Value'
import Contact from './components/Contact/Contact'

function App() {

  return (
    <div className="App">
      <div>
        <div className='white-gradient'/>
        <Header/>
        <Hero/>
        <Companies/>
        <Residencies/>
        <Value/>
        <Contact/>
      </div>
    </div>
  )
}

export default App
