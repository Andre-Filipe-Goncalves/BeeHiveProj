import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BeeImportance from './BeeImportance';
import Homepage from './Home';
import Gems from './Gems';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <ul className="Nav">
            <li><NavLink activeClassName='Navlink' exact to='/'>Home</NavLink></li>
            <li><NavLink activeClassName='Navlink' to='/BeeImportance'>The importance of bees</NavLink></li>
            <li><NavLink activeClassName='Navlink' to='/Gems'>The 5 gems of bees</NavLink></li>
        </ul>
        <Switch>
          <Route exact path ='/' component={Homepage} />
          <Route path ='/BeeImportance' component={BeeImportance} />
          <Route path ='/Gems' component={Gems} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
