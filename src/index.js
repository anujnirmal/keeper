import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Header />
      <Footer />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
