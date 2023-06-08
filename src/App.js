import { Route, Switch } from "react-router-dom";
import About from "./components/component/about/About";
import Contact from "./components/component/contact/Contact";
import Layout from "./components/component/layout/Layout";
import Home from "./components/component/home/Home";
import NoPage from "./components/component/nopage/NoPage";

function App() {
  return (
    <>
      <Layout />
   
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact} />
        <Route component={NoPage} />
      </Switch>
      
    </>
  );
}

export default App;
