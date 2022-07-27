import React from "react";
import Lucas from "./components/Lucas";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";
import Habilidades from "./pages/Habilidades";
import Contato from "./pages/Contato";
import Projetos from "./pages/Projetos";
import Error from "./pages/Error";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/habilidades" component={Habilidades} />
        <Route path="/contato" component={Contato} />
        <Route path="/projetos" component={Projetos} />
        <Route exact path="/" component={Lucas} />
        <Route path='*' component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
