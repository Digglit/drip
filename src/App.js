import React from 'react';
import './App.css';
import { useSelector } from 'react-redux'
import SideBar from './components/admin/sideBar/sideBar'
import OverviewPage from './components/admin/overviewPage/overviewPage'
import MenuPage from './components/admin/menuPage/menuPage'

function App() {
  const currentPageDisplayed = useSelector(state => state.pageDisplayed)
  return (
    <div className="App">
      <SideBar />
      {currentPageDisplayed === 0 ? <OverviewPage /> : <MenuPage />}
    </div>
  );
}

export default App;
