import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
// import Events from "./pages/Events";
// import Team from "./pages/Team"
// import About from "./pages/About";

function App() {
  return (
    <Router>
      <Navbar />
      <Landing />
      {/* <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/About" element={<About />} />
      </Routes> */}
      {/* <Footer /> */}
    </Router>
  );
}
export default App;
