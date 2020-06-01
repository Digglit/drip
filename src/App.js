import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { changePage } from './actions'
import SideBar from './components/admin/sideBar/sideBar'
import OverviewPage from './components/admin/overviewPage/overviewPage'

function App() {
  const currentPageDisplayed = useSelector(state => state.pageDisplayed)
  return (
    <div className="App">
      <SideBar />
      <OverviewPage />
    </div>
  );
}

export default App;
