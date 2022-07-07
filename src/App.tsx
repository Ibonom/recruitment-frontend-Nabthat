import TopNavbar from "./Components/TopBar/TopBar";
import MainSection from "./Components/MainSection/MainSection";
import Footer from "./Components/Footer/Footer";
import { DataProvider } from "./Context/DataProvider";
import { BrowserRouter } from "react-router-dom";
import PopUp from "./Components/PopUp/PopUp";
function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <TopNavbar />
        <MainSection />
        <Footer />
        <PopUp />
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
