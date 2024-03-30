import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Dashboard  from './pages/Dashboard';
import Send from './pages/Send';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
function App() {
  return <div>
      <BrowserRouter>
        <Routes>
         <Route path="/dashboard" element= {<Dashboard />} />
         <Route path="/signin" element={<Signin />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/send" element={<Send />} />
        </Routes>
      </BrowserRouter>
      
    </div >
}

export default App
