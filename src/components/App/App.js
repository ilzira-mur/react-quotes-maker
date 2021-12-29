import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import api from '../../utils/api';

function App() {

  
  const [author, setAuthor] = React.useState('');
  const [body, setBody] = React.useState('');

  const handleQuote = (quote) => {
    api.getQuote(quote)
    .then((newQuote) => {
      console.log(newQuote)
      setAuthor(newQuote.quote.author)
      setBody(newQuote.quote.body)
    })
    .catch(err => console.log(`${err}`))
  }

  return (
    <div className="app">
      <Header />
      <Main onGetQuote={handleQuote} author={author} body={body} />
      <Footer /> 
    </div>
  );
}

export default App;
