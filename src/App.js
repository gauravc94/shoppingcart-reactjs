import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Section from "./components/Section";

function App() {
  return (
    <div className="App">
      {/* <!-- Navigation--> */}
      <NavBar />

      {/* <!-- Header--> */}
      <Header />

      {/* <!-- Section--> */}
      <Section />

      {/* <!-- Footer--> */}
      <Footer />
    </div>
  );
}

export default App;
