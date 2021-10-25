
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import look from "../../images/image.jpg"

function App() {

  onSubmitf() {
    
  }
  return (
   
    <div className="App">
      <Header />
      <Main onSubmitf={onSubmitf} />
      <Footer /> 
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <img src={look} alt="look" ></img>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
