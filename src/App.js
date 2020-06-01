import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { changePage } from './actions'
import SideBar from './components/admin/sideBar/sideBar'
import OverviewPage from './components/admin/overviewPage/overviewPage'
import MenuPage from './components/admin/menuPage/menuPage'

function App() {
  const currentPageDisplayed = useSelector(state => state.pageDisplayed)
  return (
    <div className="App">
      <SideBar />
      {false ? <OverviewPage /> : <MenuPage />}
    </div>
  );
}

export default App;
