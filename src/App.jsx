// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navigationbar from './components/Navigationbar'
import Footer from './components/Footer'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router> {/*gives routing capabilities to your app.*/}
      <div className="App">
        <Navigationbar />
        <Routes> {/*groups and selects which route to render.*/}
          <Route path='/' element={<h3>Home</h3>} /> {/*defines how to map a URL path to a component.*/}
          <Route path='about' element={<h3>About</h3>} />
          <Route path='project' element={<h3>Project</h3>} />
          <Route path='resume' element={<h3>Resume</h3>} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
        <Footer />
      </div>
    </Router >
    // <div className="card">
    //   <button onClick={() => setCount((count) => count + 1)}>
    //     count is {count}
    //   </button>
    // </div>
  )
}

export default App
