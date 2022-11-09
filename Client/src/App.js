<<<<<<< HEAD
import Switch from './Components/Switch/Switch'
import About from './Components/FutureAbout/FutureAbout'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import {BrowserRouter} from 'react-router-dom';
=======
import Switch from "./Components/Switch/Switch";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
>>>>>>> fd00b2deb32c5cb08320f98b9a2f3a56d7c34dad

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
