import About from "./components/About";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Process from "./components/Process";
// import { useFetchContent } from "./hooks/useFetchContent";
import { useLanguage } from "./hooks/useLanguage";

function App() {
  // const {
  //   data: generalData,
  //   status,
  //   error,
  // } = useFetchContent<GeneralData>("content/general.json");

  useLanguage();

  return (
    <>
      <Header />
      <main className="">
        <Hero />
        <div className="space-y-25">
          <About />
          <Process />
          <Contacts />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
