import React from 'react';
import './App.css';
import AddToHomeScreen from './component/AddToHomeScreen';
import Header from './component/Header';
import SideBar from './component/SideBar';
import ButtonForSideBar from './component/ButtonForSideBar';

function App() {
  return (
    <>
      {/* <Header /> */}
      <ButtonForSideBar component={<Header />} />
      
    </>
  );
}

export default App;
