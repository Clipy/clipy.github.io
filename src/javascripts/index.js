import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SaveHistory from './components/SaveHistory';
import Snippet from './components/Snippet';
import Shortcut from './components/Shortcut';
import OpenSource from './components/OpenSource';
import SpecialThanks from './components/SpecialThanks';
import DownloadBar from './components/DownloadBar';
import Footer from './components/Footer';

class Root extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Navbar />
        <div className="container">
          <Hero />
          <SaveHistory />
          <Snippet />
          <Shortcut />
          <OpenSource />
          <SpecialThanks />
        </div>
        <DownloadBar />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
