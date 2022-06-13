import './App.css';
import {Auth} from 'aws-amplify';
import { useAuth } from './context/useAuth';
import { Routes,Route } from 'react-router-dom';
import Homepage from './pages/home-page/Homepage';
import Searchpage from './pages/search-page/Searchpage';
import SingleBook from './pages/single-book-page/SingleBook';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/search' element={<Searchpage/>}/>
        <Route path='/book/:volumeId' element={<SingleBook/>}/>
      </Routes>
    </div>
  );
}

export default App;
