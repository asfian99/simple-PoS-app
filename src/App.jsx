import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import History from "./components/History";
import Header from "./components/Header";

function App() {
  const [transList, setTransList] = useState([]);
  const transHandler = (obj) => {
    setTransList([...transList, obj]);
    console.log("APP.JSX");
    console.log(transList);
  };
  return (
    <div className="p-6 text-gray-700">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home transHandler={transHandler} />
        </Route>
        <Route path="/history">
          <History list={transList} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
