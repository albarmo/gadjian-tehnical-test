import "./App.css";

//import router - using react-router library
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//import Screens
import { HomePage } from "./screens";

//import bootsrap ui framework
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
