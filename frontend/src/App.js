import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Route } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";
function App() {
  return (
    <BrowserRouter className="App">
      <Header />
      <main style={{ minHeight: "93vh" }}>
        <Route path="/" component={LandingPage} exact />
        <Route path="/mynotes" component={() => <MyNotes />} />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
