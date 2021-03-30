import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Knowledge from "./pages/knowledge";
import Notfound from "./pages/notfound";
import Portfolio from "./pages/portfolio";
import AOS from "aos";
import "aos/dist/aos.css";



const App = () => {
  AOS.init();
  return (
    <>
      <BrowserRouter>
        <Route>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/contact" component={Contact} />
              <Route path="/competences" component={Knowledge} />
              <Route path="/portfolio" component={Portfolio} />
              <Route component={Notfound} />
            </Switch>
        </Route>
      </BrowserRouter>
    </>
  );
};

export default App;
