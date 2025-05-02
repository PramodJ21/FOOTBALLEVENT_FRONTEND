import React from 'react';
import Header from './components/Header/Header';
import MatchInfo from './components/MatchInfo/MatchInfo';
import CallToAction from './components/CallToAction/CallToAction';
import EventDetails from './components/EventDetails/EventDetails';
import Footer from './components/Footer/Footer';
import AdminModal from './components/AdminModal/AdminModal';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <MatchInfo />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

export default App;
