import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Features from './Components/Features/Features';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Work from './Components/Work/Work';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';

function App() {
  return (
    <Router className="">
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Navbar />
          <Header />
          <Work />
          <Features />
          <About />
          <Contact />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
