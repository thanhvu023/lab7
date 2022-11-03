import './App.css';
import  ListPlayers from './components/ListPlayers';
import Contact from './components/Contact';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="dashboard" element={<ListPlayers/>}  />
        <Route path="add" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
