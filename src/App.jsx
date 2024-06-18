import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Navbar from "./components/Navbar";

import Features from "./components/Features";
import Footer from "./components/Footer";
import HowItWorks from "./components/HowItWoeks";

function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
    
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
}

export default App;
