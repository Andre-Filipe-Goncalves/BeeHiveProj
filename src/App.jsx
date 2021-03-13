import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BeeImportance from './BeeImportance';
import Homepage from './Home';
import Gems from './Gems';
import AboutUs from './components/AboutUsComponents/AboutUs';
import Neighbours from './Neighbours';
import SavingBees from './components/SavingBeesComponents/SavingBees';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <ul className="Nav">
            <li><NavLink activeClassName='Navlink' exact to='/'>Home</NavLink></li>
            <li><NavLink activeClassName='Navlink' to='/BeeImportance'>The importance of bees</NavLink></li>
            <li><NavLink activeClassName='Navlink' to='/Neighbours'>Find your neighbour</NavLink></li>
            <li><NavLink activeClassName='Navlink' to='/Gems'>The 5 gems of bees</NavLink></li>
            <li><NavLink activeClassName='Navlink' to='/SavingBees'>Saving the bees</NavLink></li>
            <li><NavLink activeClassName='Navlink' to='/AboutUs'>About us</NavLink></li>


        </ul>
        <Switch>
          <Route exact path ='/' component={Homepage} />
          <Route path ='/BeeImportance' component={BeeImportance} />
          <Route path ='/Gems' component={Gems} />
          <Route path ='/AboutUs' component={AboutUs} />
          <Route path ='/Neighbours' component={Neighbours} />
          <Route path ='/SavingBees' component={SavingBees} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
