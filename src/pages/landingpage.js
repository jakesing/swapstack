import Header from "../components/landing_page/Header";
import Main from "../components/landing_page/Main";
import Footer from "../components/landing_page/Footer";
import { Route, Router, Switch } from "react-router";

function LandingPage() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/brands">
          <Footer />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default LandingPage;
