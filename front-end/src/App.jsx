import '../public/style.css'
import Siteheader from './assets/Siteheader'
import Loginform from './assets/Loginform';
import Dashboard from './assets/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {


  return (
    <>
      <Siteheader />
        <div className="App">
          <Router>
            <Routes>
              <Route path="/" element={<Loginform/>} />
              <Route path="/dashboard" element={<Dashboard/>} />
            </Routes>
          </Router>
        </div>
    </>
  )
}

export default App
