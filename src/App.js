import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contract from './Components/Contract';
import Home from './Components/Home';
import Navber from './Components/Navber';
import Resume from './Components/Resume';

function App() {
  return (
    <div className="App">
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/resume' element={<Resume></Resume>}></Route>
        <Route path='contract' element={<Contract></Contract>}></Route>
      </Routes>
      <Toaster/>
      
      
    </div>
  );
}

export default App;
