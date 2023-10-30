import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import {useSelector} from 'react-redux';

function App() {
  const isLogin = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={isLogin ? <Home></Home> : <Login></Login>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
