import About from "./components/About";
import Cases from "./components/Cases";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MainError from "./components/MainError";
import Process from "./components/Process";
import { useFetchContent } from "./hooks/useFetchContent";
import { useLanguage } from "./hooks/useLanguage";
import type { GeneralData } from "./lib/types";
import { AnimatePresence } from "motion/react";
import { useDelayedSuccess } from "./hooks/useDelayedSuccess";
import Loader from "./components/Loader";

function App() {
  const {
    data: generalData,
    status,
    error,
  } = useFetchContent<GeneralData>("content/general.json");

  useLanguage();

  const loaderDelay = 1.5; // in seconds
  const showContent = useDelayedSuccess(status, loaderDelay * 1000);

  if (error) {
    return <MainError error={error} onRetry={() => window.location.reload()} />;
  }

  return (
    <>
      {/* Loader */}
      <AnimatePresence>{!showContent && <Loader />}</AnimatePresence>

      {/* Main App */}
      {showContent && (
        <>
          <Header contacts={generalData?.contacts} />
          <main>
            <Hero data={generalData?.hero} contacts={generalData?.contacts} />
            <div className="space-y-30 sm:space-y-20">
              <About data={generalData?.about} />
              <Cases />
              <Process data={generalData?.process} />
              <Contacts contacts={generalData?.contacts} />
            </div>
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
