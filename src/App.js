import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Footer from "./Components/Footer";
// import About from "./Components/About";
import Alert from "./Components/Alert";

function App() {
  return (
    <>
      <Navbar title="Tune-text" />
      <Alert alert="This is a alert Message !"/>
      <TextForm FormLabel="Enter the Text to Analyze" />
      {/* <About /> */}
      <Footer DeveloperName="S K Sahil Mandal" />
    </>
  );
}

export default App;
