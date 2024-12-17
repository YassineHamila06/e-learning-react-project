import logo from './logo.svg';
import './App.css';
import Home from './views/home/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './views/home/layout';
import Addcours from './views/home/cours/addcours';
import Addformation from './views/home/formation/addformation';
import Listecours from './views/home/cours/listecours';
import Updatecours from './views/home/cours/updatecours';
import Listeformation from './views/home/formation/listeformation';
import Updateformation from './views/home/formation/updateformation';
import Addformateur from './views/home/formateur/addformateur';
import Listeformateur from './views/home/formateur/listeformateur';
import Updateformateur from './views/home/formateur/updateformateur';
import Addetudiant from './views/home/etudiant/addetudiant';
import Listeetudiant from './views/home/etudiant/listeetudiant';
import Updateetudiant from './views/home/etudiant/updateetudiant';
import Login from './views/login';
import Register from './views/register';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}>
          <Route path="/" element={<Layout/>}/>
          <Route path='/addcours' element={<Addcours/>}/>
          <Route path='/addformation' element={<Addformation/>}/>
          <Route path='/listecours' element={<Listecours/>}/>
          <Route path='/update/:id' element={<Updatecours/>}/>
          <Route path='/listeformation' element={<Listeformation/>}/>   
          <Route path='/updatefor/:id' element={<Updateformation/>}/>
          <Route path='/addformateur' element={<Addformateur/>}/>
          <Route path='listeformateur' element={<Listeformateur/>}/>
          <Route path='updatefore/:id' element={<Updateformateur/>}/>
          <Route path='addetudiant' element={<Addetudiant/>}/>
          <Route path='Listeetudiant' element={<Listeetudiant/>}/>
          <Route path='updateforr/:id' element={<Updateetudiant/>}/>
          </Route>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;


