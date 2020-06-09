import React from 'react';
import './App.css';
import { useSelector } from 'react-redux'
import SideBar from './components/admin/sideBar/sideBar'
import OverviewPage from './components/admin/overviewPage/overviewPage'
import MenuPage from './components/admin/menuPage/menuPage'
import ToolsPage from './components/admin/toolsPage/toolsPage';
import ManageCoupons from './components/admin/toolsPage/subcomponents/manageCoupons/manageCoupons'
import ViewPreviousOrders from './components/admin/toolsPage/subcomponents/viewPreviousOrders/viewPreviousOrders';
import AddNewDriver from './components/admin/toolsPage/subcomponents/addNewDriver/addNewDriver';
import ConfirmActionModule from './components/global/confirmActionModule/confirmActionModule'
import ItemModifiers from './components/admin/menuPage/menuSection/subcomponents/itemModifiers/itemModifiers';
import DriverDetails from './components/admin/toolsPage/subcomponents/driverDetails/driverDetails';
import EditModifiers from './components/admin/menuPage/menuSection/subcomponents/editModifiers/editModifiers';

function App() {
  const currentPageDisplayed = useSelector(state => state.pageDisplayed)
  return (
    <div className="App">
      <SideBar />
      {currentPageDisplayed === 0 ? <OverviewPage /> : currentPageDisplayed === 1 ? <MenuPage /> : <ToolsPage />}
      <ManageCoupons />
      <ViewPreviousOrders />
      <AddNewDriver />
      <ConfirmActionModule />
      <ItemModifiers />
      <DriverDetails />
      <EditModifiers />
    </div>
  );
}

export default App;
