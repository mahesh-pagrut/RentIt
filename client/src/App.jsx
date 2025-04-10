import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import './App.css'
import Companies from './components/Companies/Companies'
import Residencies from './components/Residencies/Residencies'

function App() {

  return (
    <div className="App">
      <div>
        <div className='white-gradient'/>
        <Header/>
        <Hero/>
        <Companies/>
        <Residencies/>
      </div>
    </div>
  )
}

export default App
