
import './App.css';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import Home from './components/Home';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Test from './components/Test';
import Slick1 from './components/slick/Slick1';
import Slick2 from './components/slick/Slick2';
import Slick3 from './components/slick/Slick3';
import Silk4 from './components/slick/Silk4';
import Silk5 from './components/slick/Silk5';
import Silk6 from './components/slick/Silk6';
import Silk7 from './components/slick/Silk7';
import MoviesApi from './components/MoviesApi';
import Maint from './components/Maint';
import Login from './components/Login';
import Registation from './components/Registation';

function App() {
  return (
    <div className="App">
<>
<Navbar/>
<Navbar2/>
     <Router>
     <Switch>
     <Route exact path ="/" component = {Home} />   
     <Route exact path ="/test" component = {Test} />
     <Route exact path ="/pandey" component = {Slick1} />
     <Route exact path ="/gangu" component = {Slick2} />
     <Route exact path ="/time" component = {Slick3} />
     <Route exact path ="/conj" component = {Silk4} />
     <Route exact path ="/uan" component = {Silk5} />
     <Route exact path ="/anb" component = {Silk6} />
     <Route exact path ="/bat" component = {Silk7} />
     <Route exact path ="/movies" component = {MoviesApi} />
     <Route exact path ="/maint" component = {Maint} />
     <Route exact path ="/login" component = {Login} />
     <Route exact path ="/registation" component = {Registation} />
     </Switch>
     </Router>

</>   
    </div>
  );
}

export default App;
