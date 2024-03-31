import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Dashboard  from './pages/Dashboard';
import Send from './pages/Send';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Checkme from './pages/Checkme';
import { Protected, Defended } from './components/Protected';
function App() {
  return <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Checkme />} />
          <Route element= {<Protected />}>
         <Route path="/dashboard" element= {<Dashboard />} />
         <Route path="/send" element={<Send />} />
         </Route>
         <Route element= {<Defended />}>
         <Route path="/signin" element={<Signin />} />
         <Route path="/signup" element={<Signup />} />
         </Route>
        </Routes>
      </BrowserRouter>
      
    </div >
}

export default App
