import './App.css';
import RenderForm from './components/pages/RenderForm';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import CreateForm from "./components/pages/CreateForm"
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Admin from './components/Admin';
import Response from './components/Response';
import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home';
import Logout from './components/Logout';

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Logout/>
        <Switch>
          <Route path='/' component={Home} exact={true}/>
          <Route path="/viewform/:url" component={RenderForm}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={SignUp}/>
          <PrivateRoute path="/admin" >
            <Admin/>
          </PrivateRoute>
          <PrivateRoute path="/responses/:formurl" >
            <Response/>
          </PrivateRoute>
          <PrivateRoute path="/createform">
            <CreateForm/>
          </PrivateRoute>
        </Switch>
        
      </div>
    </Router>
    
  );
}

export default App;
