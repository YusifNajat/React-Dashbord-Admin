import './App.css'
import { BrowserRouter as Router, Switch, Route,Redirect} from 'react-router-dom' ;
// import 'tachyons'
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from './pages/user/User' ;
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';

function App() {
  return (
    <ProductConsumer>
    {value=>{
      const {Auth,GetUser_Login} = value
  return(<>
    <Router>
    {Auth === true ? <Redirect from='/' to='/dashboard' />:<Redirect from='/dashboard' to='/' />}
          <Switch>
          <Route exact={true} path="/" component={LoginForm} />
          <Route exact={true} path="/sign-up" component={Register} />
            <All GetUser_Login={GetUser_Login}>
            <Route exact={true} path="/dashboard" component={Home} />
            <Route exact={true} path="/users" component={UserList} />
            <Route  path="/user/:userId">
              <User/>           
            </Route>
            <Route  exact path="/new-user">
              <NewUser/>           
            </Route>

            <Route exact={true} path="/products">
              <ProductList/>           
            </Route>
            <Route path="/product/:productId">
              <Product/>           
            </Route>
            <Route  exact path="/new-product">
              <NewProduct/>           
            </Route>
          </Switch>
    </Router>
    </>) 
}}
  </ProductConsumer>
  );
}

export default App;
