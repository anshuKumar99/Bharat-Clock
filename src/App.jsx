import Body from "./Components/Body";
import Clock from "./Components/Clock";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <center>
      <Header />
      <hr />
      <Body />
      <Clock />
    </center>
  );
}

export default App;
