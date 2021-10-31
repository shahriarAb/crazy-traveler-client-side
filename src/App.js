import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AddService from './pages/AddService/AddService';
import Booknow from './pages/Booknow/Booknow';
import AuthProvider from './pages/Context/AuthProvider';
import Home from './pages/Home/Home/Home';
import ManageAllBookings from './pages/ManageAllBookings/ManageAllBookings';
import MyBookings from './pages/MyBookings/MyBookings';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import Signin from './pages/Signin/Signin';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/destination/:id">
              <Booknow></Booknow>
            </PrivateRoute>
            <PrivateRoute path="/mybookings">
              <MyBookings></MyBookings>
            </PrivateRoute>
            <PrivateRoute path="/managebookings">
              <ManageAllBookings></ManageAllBookings>
            </PrivateRoute>
            <PrivateRoute path="/addservice">
              <AddService></AddService>
            </PrivateRoute>
            <Route path="/signin">
              <Signin></Signin>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
