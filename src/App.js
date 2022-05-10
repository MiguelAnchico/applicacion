import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';

import Unregister from './pages/unregister/Unregister';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Unregister />}/>
          <Route path='/uploadProblem' element={<></>}/>
          <Route path='/uploadSolution' element={<></>}/>
          <Route path='/login' element={<></>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
