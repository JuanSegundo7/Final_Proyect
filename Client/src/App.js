import Switch from './Components/Switch/Switch'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import {BrowserRouter} from 'react-router-dom';

import './App.css';

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
