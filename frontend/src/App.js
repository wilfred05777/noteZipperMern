import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./screens/LandingPage/LandingPage";

function App() {
  return (
    <div className="App">
      <Header />
      <main style={{ minHeight: "93vh" }}>
        <LandingPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
