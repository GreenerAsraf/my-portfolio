import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Menu from "./Components/MenuBar/Menu";
import About from "./Components/AboutPage/About";
import Footer from "./Components/ShearedFolder/Footer/Footer";
import PortfolioPage from "./Components/PortfolioPage/PortfolioPage";
import ArticelPage from "./Components/ArticelPage/ArticelPage";
import ContactPage from "./Components/ContactPage/ContactPage";
import MouseParticles from "react-mouse-particles";
import MessengerCustomerChat from 'react-messenger-customer-chat';

function App() {
  return (
    <>
      <Router>
        <Menu />

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/home">
            <HomePage />
          </Route>
          <Route path="/aboutMe">
            <About />
          </Route>
          <Route path="/portfolio">
            <PortfolioPage />
          </Route>
          <Route path="/blog">
            <ArticelPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
        </Switch>
        <Footer />
        <MouseParticles
          g={1}
          num={6}
          color="random"
          cull="stats,image-wrapper"
          level={6}
        />
        <MessengerCustomerChat
          pageId="106794868255134"
          appId="620513202238912"          
        />
      </Router>
    </>
  );
}

export default App;
