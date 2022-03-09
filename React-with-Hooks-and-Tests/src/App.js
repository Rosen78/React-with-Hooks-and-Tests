import logo from './logo.svg';
import './App.css';
import Home from './Home'
import RepoDetails from './RepoDetails'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repo-details" element={<RepoDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
