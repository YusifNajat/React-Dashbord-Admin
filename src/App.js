import './App.css'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom' ;

import Topbar from "./components/Topbar/TopBar";
import Sidebar from "./components/sidebar/Sidebar"
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";

function App() {
  return (
    <Router>
      <Topbar/>
        <div className="container">

          <Sidebar/>
          
          <Switch>
            <Route exact={true} path="/">
              <Home/>           
            </Route>

            <Route exact={true} path="/users">
              <UserList/>           
            </Route>
          </Switch>

        </div>
    </Router>
  );
}

export default App;
