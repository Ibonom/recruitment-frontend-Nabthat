import TopNavbar from "./Components/TopBar/TopBar";
import MainSection from "./Components/MainSection/MainSection";
import Footer from "./Components/Footer/Footer";
import { DataProvider } from "./Context/DataProvider";
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <TopNavbar />
        <MainSection />
        <Footer />
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
