import './App.css'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom' ;

import Topbar from "./components/Topbar/TopBar";
import Sidebar from "./components/sidebar/Sidebar"
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from './pages/user/User' ;
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';

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
            <Route  path="/user/:userId">
              <User/>           
            </Route>
            <Route  exact path="/newUser">
              <NewUser/>           
            </Route>

            <Route exact={true} path="/products">
              <ProductList/>           
            </Route>
            <Route  path="/products/:productId">
              <User/>           
            </Route>
            <Route  exact path="/products">
              <NewUser/>           
            </Route>
          </Switch>

        </div>
    </Router>
  );
}

export default App;
