import './App.css';
import RenderForm from './components/pages/RenderForm';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import CreateForm from "./components/pages/CreateForm"
import Login from "./components/Login";
import SignUp from "./components/Signup";

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Switch>
          <Route path="/createform">
          <CreateForm/>
          </Route>
          <Route path="/viewform/:url">
          <RenderForm/>
          </Route>
          <Route path="/login">
          <Login/>
          </Route>
          <Route path="/signup">
          <SignUp/>
          </Route>
        </Switch>
        
      </div>
    </Router>
    
  );
}

export default App;
