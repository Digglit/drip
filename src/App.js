import React from 'react';
import './App.css';
import { useSelector } from 'react-redux'
import SideBar from './components/admin/sideBar/sideBar'
import OverviewPage from './components/admin/overviewPage/overviewPage'
import MenuPage from './components/admin/menuPage/menuPage'
import ToolsPage from './components/admin/toolsPage/toolsPage'
import ManageCoupons from './components/admin/toolsPage/subcomponents/manageCoupons/manageCoupons'
import ViewPreviousOrders from './components/admin/toolsPage/subcomponents/viewPreviousOrders/viewPreviousOrders'
import AddNewDriver from './components/admin/toolsPage/subcomponents/addNewDriver/addNewDriver'
import ConfirmActionModule from './components/global/confirmActionModule/confirmActionModule'
import ItemModifiers from './components/admin/menuPage/menuSection/subcomponents/itemModifiers/itemModifiers'
import DriverDetails from './components/admin/toolsPage/subcomponents/driverDetails/driverDetails'
import EditModifiers from './components/admin/menuPage/menuSection/subcomponents/editModifiers/editModifiers'
import CouponDetails from './components/admin/toolsPage/subcomponents/manageCoupons/subcomponents/couponDetails/couponDetails'
import EmailPage from './components/admin/emailPage/emailPage'
import ComposeEmail from './components/admin/emailPage/subcomponents/composeEmail/composeEmail';
import EmailDetails from './components/admin/emailPage/subcomponents/emailDetails/emailDetails'
import SalesBreakdown from './components/admin/overviewPage/subcomponents/salesBreakdown/salesBreakdown';
import PopularDishesPage from './components/admin/overviewPage/subcomponents/popularDishesPage/popularDishesPage';

function App() {
  const currentPageDisplayed = useSelector(state => state.pageDisplayed)
  return (
    <div className="App">
      <SideBar />
      {currentPageDisplayed === 0 ? <OverviewPage /> :
        currentPageDisplayed === 1 ? <MenuPage /> :
          currentPageDisplayed === 2 ? <EmailPage /> :
            currentPageDisplayed === 3 ? <ToolsPage /> :
              currentPageDisplayed === 4 ? <SalesBreakdown /> :
                <PopularDishesPage />
      }
      <ManageCoupons />
      <ViewPreviousOrders />
      <AddNewDriver />
      <ConfirmActionModule />
      <ItemModifiers />
      <DriverDetails />
      <EditModifiers />
      <CouponDetails />
      <ComposeEmail />
      <EmailDetails />
    </div>
  );
}

export default App;
