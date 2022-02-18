import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Header} from './Components/Header';
import {Home} from './Components/Home';
import {Student} from './Components/Student';
import {Contact} from "./Components/Contact";
import {NotFound} from './Components/NotFound';
import "./Components/Style.css"

function App() {
  return (
    <div className="App">
     <Router>
       <Header/>
       <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/student' element={<Student/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/*' element={<NotFound/>}/>
       </Routes>
     </Router>
    </div>
  );
}

export default App;
