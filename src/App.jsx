import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navigationbar from './components/Navigationbar'
import Footer from './components/Footer'
import Loader from './components/Loader'
import Home from './components/home/Home'
import Resume from './components/resume/Resume'
import Projects from './components/projects/Projects'
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
            <Route path='project' element={<Projects />} />
            <Route path='resume' element={<Resume />} />
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
