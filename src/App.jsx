import Navbar from "./component/Navbar";
import Hero from "./component/Hero";

import image3 from "./assets/hero.png";
import About from "./component/About";
function App() {
  return (
    <main>
      <section
        style={{
          backgroundImage: `url(${image3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          overflow: "hidden",
          height: "100vh",
        }}
      >
        <div className='m-auto max-w-[1268px]'>
          <Navbar />
          <Hero />
        </div>
      </section>
      <About />
    </main>
  );
}

export default App;
