import { Switch, Route } from "react-router-dom";

import { Home } from "./pages/Home/Home";

import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header"> Lista de Produtos </header>

      <div className="content">
          <Switch>
            <Route path="/" exact={true} component={Home}/>
          </Switch>
      </div>
    </div>
  );
}
