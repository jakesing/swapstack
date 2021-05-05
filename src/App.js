import logo from "./logo.svg";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Header />
      <Main />
      <Footer />
    </Fragment>
  );
}

export default App;
