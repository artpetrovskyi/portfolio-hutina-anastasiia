import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { useFetchContent } from "./hooks/useFetchContent";
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
      <main className="relative z-10 mb-80 bg-background">
        <Hero />
        <div className="space-y-60">
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
