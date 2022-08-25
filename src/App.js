
import './App.css';
import { Footer } from './Footer/Footer';
import { Navbar } from './Navbar/Navbar';
// import { AllRoutes } from './Routes/AllRoutes';
import { Home } from './Routes/Home';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer/>
      {/* <AllRoutes /> */}
    </div>
  );
}

export default App;
