import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BeeImportance from './BeeImportance';
import Homepage from './Home';

function App() {
  return (
    <div className="App">
         <Router>
        <Switch>
          <Route exact path ='/' component={Homepage} />
          <Route exact path ='/:id' component={BeeImportance} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
