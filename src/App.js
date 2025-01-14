import LockScreen from "./components/lock-screen";
import Register from "./components/register";
import Login from "./components/login";
import Chosen from "./components/Chosen";
import './App.css';
import Ipad from "./components/ipad";
import Page from "./components/page";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
    <div className="relative h-screen bg-indigo-500">
    <Ipad> 
     <Routes>
      <Route path="/" element={<LockScreen />} />
      <Route path="/register" element={<Register />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/chosen" element={<Chosen />} />
      <Route path="/page" element={<Page />} />
     </Routes>
    </Ipad>
    </div>
  </BrowserRouter>
      );
}

export default App;