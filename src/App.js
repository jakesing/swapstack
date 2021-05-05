import logo from "./logo.svg";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Fragment } from "react";
import CalltoAction from "./components/CalltoAction";

function App() {
  return (
    <Fragment>
      <Header />
      <Main />
      <CalltoAction
        firstheader="hi"
        secondheader="there"
        description="whatever whatever"
        buttontext="hey"
      />
      <Footer />
    </Fragment>
  );
}

export default App;
