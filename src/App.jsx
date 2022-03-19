import './App.css';
import {Route, Routes} from 'react-router-dom'
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">

      {/* HEADER */}
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
