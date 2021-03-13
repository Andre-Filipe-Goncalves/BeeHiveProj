import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SavingBees from './components/SavingBeesComponents/SavingBees';
import AboutUs from './components/AboutUsComponents/AboutUs';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/:id" component={SavingBees} />
          <Route path="/" component={AboutUs} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
