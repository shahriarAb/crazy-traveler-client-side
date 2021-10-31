import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
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
            <Route path="/destination/:id">
              <Booknow></Booknow>
            </Route>
            <Route path="/mybookings">
              <MyBookings></MyBookings>
            </Route>
            <Route path="/managebookings">
              <ManageAllBookings></ManageAllBookings>
            </Route>
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
