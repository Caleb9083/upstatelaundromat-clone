import './App.css';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Amenities from './components/Amenities';
import Wpas from './components/Wpas';
import FAQ from './components/FAQ';
import Prefooter from './components/Prefooter';
import Footer from './components/Footer'



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


      {/* Including The Information Section */}
      {/* Pre_footer */}
      <Prefooter />

      {/* Including The Footer */}
      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;
