import './App.css';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Amenities from './components/Amenities';
import Wpas from './components/Wpas';
import FAQ from './components/FAQ';



function App() {
  return (
    <div className="App">
      {/* Including The Navigation Bar */}
      {/* Navbar */}
      <Navbar />

      {/* Including The Service section */}
      {/* Service */}
      <Services />

      {/* Including The Amenities section */}
      {/* Amenities */}
      <Amenities />

      {/* Including The What People Are Saying setion */}
      {/* WPAS */}
      <Wpas />
      
      {/* Including The Frequently Asked Questions */}
      {/* FAQ */}
      <FAQ />


      {/* Including The Pre-Footer Section */}
      {/* Pre_footer */}

      {/* Including The Footer */}
      {/* Footer */}

    </div>
  );
}

export default App;
