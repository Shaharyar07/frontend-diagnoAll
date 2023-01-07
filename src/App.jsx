import Navbar from "./component/Navbar";
import Hero from "./component/Hero";

import newimg from "./assets/newimg.png";
import About from "./component/About";
import Customer from "./component/Customer";
import Services from "./component/Services";
import Footer from "./component/Footer";
function App() {
  return (
    <main>
      <section
        style={{
          backgroundImage: `url(${newimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
          height: "100vh",
        }}
        
      >
        <div className='m-auto max-w-[1268px] '>
          <Navbar />
          <Hero />
        </div>
      </section>
      <About />
      <Customer />
      <Services />
      <Footer />
    </main>
  );
}

export default App;
