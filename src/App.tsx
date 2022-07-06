import TopNavbar from "./Components/TopBar/TopBar";
import MainSection from "./Components/MainSection/MainSection";
import Footer from "./Components/Footer/Footer";
import { DataProvider } from "./Context/DataProvider";
function App() {
  return (
    <DataProvider>
      <TopNavbar />
      <MainSection />
      <Footer />
    </DataProvider>
  );
}

export default App;
