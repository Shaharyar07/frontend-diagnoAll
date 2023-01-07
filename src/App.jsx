import Navbar from "./component/Navbar";
import Hero from "./component/Hero";

import newimg from "./assets/newimg.png";
import About from "./component/About";
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
