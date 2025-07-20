import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navigationbar from './components/Navigationbar'
import Footer from './components/Footer'
import Loader from './components/Loader'
import Home from './components/Home'
import './App.css'

function App() {
  // const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(
    () => {
      setTimeout(() => setLoading(false), 2000);
    }, []
  )

  return (
    <Router> {/*gives routing capabilities to your app.*/}
      {loading ? <div className='loader-container'><Loader /> </div> :
        < div className="App">
          <Navigationbar />
          <Routes> {/*groups and selects which route to render.*/}
            <Route path='/' element={<Home />} /> {/*defines how to map a URL path to a component.*/}
            <Route path='about' element={<h3>About</h3>} />
            <Route path='project' element={<h3>Project</h3>} />
            <Route path='resume' element={<h3>Resume</h3>} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
          <Footer />
        </div>}
    </Router >
    // <div className="card">
    //   <button onClick={() => setCount((count) => count + 1)}>
    //     count is {count}
    //   </button>
    // </div>
  )
}

export default App
