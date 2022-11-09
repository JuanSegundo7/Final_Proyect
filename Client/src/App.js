import Switch from './Components/Switch/Switch'
import About from './Components/FutureAbout/FutureAbout'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import {BrowserRouter} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* <About /> */}
      <Header />
      <main>
          <Switch />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
