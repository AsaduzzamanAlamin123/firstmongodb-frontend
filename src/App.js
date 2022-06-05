import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AddUser from './componants/AddUser/AddUser';
import Home from './componants/Home/Home';
import UpdateUser from './componants/UpdateUser/UpdateUser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'element={<Home></Home>}></Route>
        <Route path='user/add' element={<AddUser></AddUser>}></Route>
        <Route path='/update/:id' element={<UpdateUser></UpdateUser>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
