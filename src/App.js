import react from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/HomePage/Home';
 
function App() {
  return (
    <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home}/>
    </Switch>
    </Router>
  );
}

export default App;
