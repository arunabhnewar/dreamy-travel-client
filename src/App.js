import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import About from './Pages/About/About';
import AddVacations from './Pages/AddVacations/AddVacations';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import ManageAllOrders from './Pages/ManageAllOrders/ManageAllOrders';
import MyOrders from './Pages/MyOrders/MyOrders';
import NotFound from './Pages/NotFound/NotFound';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Footer from './Pages/Shared/Footer/Footer';
import NavMenubar from './Pages/Shared/NavMenubar/NavMenubar';

function App() {
  return (
    <div className="App m-0 p-0">
      <AuthProvider>
        <Router>
          <NavMenubar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/myOrders">
              <MyOrders />
            </Route>
            <PrivateRoute exact path="/placeorder/:id">
              <PlaceOrder />
            </PrivateRoute>
            <Route exact path="/addVacations">
              <AddVacations />
            </Route>
            <Route exact path="/manageAllOrders">
              <ManageAllOrders />
            </Route>
            <Route exact path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div >
  );
}

export default App;
