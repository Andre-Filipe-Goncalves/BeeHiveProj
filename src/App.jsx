import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BeeImportance from './BeeImportance';
import Homepage from './Home';
import Gems from './Gems';

function App() {
  return (
    <div className="App">
         <Router>
        <Switch>
          <Route exact path ='/' component={Homepage} />
          <Route path ='/:id' component={BeeImportance} />
          <Route path ='/:id' component={Gems} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
