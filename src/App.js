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
import Sentresponse from './components/Sentresponse';
import { useSelector } from "react-redux";
import Errorpage from './components/Errorpage';

const App=() =>{

  const { formdetails, submitready, formname,formsubmit } = useSelector(
    (state) => state.formrender
  );

  return (
    <Router>
      <div className="font-sans">
      
        <Switch>
          <Route path='/' component={Home} exact={true}/>
          <Route path="/viewform/:url" component={RenderForm}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={SignUp}/>
          {formsubmit&&<Route path="/thankyou"><Sentresponse formname={formname}/></Route>}
          <PrivateRoute path="/admin" >
            <Admin/>
          </PrivateRoute>
          <PrivateRoute path="/responses/:url" >
            <Response/>
          </PrivateRoute>
          <PrivateRoute path="/createform">
            <CreateForm/>
          </PrivateRoute>
          <Route path='*' component={Errorpage} />
        </Switch>
        
      </div>
    </Router>
    
  );
}

export default App;
