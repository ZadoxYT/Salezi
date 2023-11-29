import '../public/style.css'
import Siteheader from './assets/Siteheader'
import Loginform from './assets/Loginform';
import Dashboard from './assets/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {


  return (
    <>
      <Siteheader />
      <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Loginform/>} />
        </Routes>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
