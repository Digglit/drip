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
import MenuItemBreakdown from './components/admin/overviewPage/subcomponents/popularDishesPage/subcomponents/menuItemBreakdown/menuItemBreakdown';
import CustomerDataPage from './components/admin/overviewPage/subcomponents/customerDataPage/customerDataPage';
import CustomerDetails from './components/admin/overviewPage/subcomponents/customerDataPage/subcomponents/customerDetails/customerDetails';
import CustomTransaction from './components/admin/toolsPage/subcomponents/customTransaction/customTransaction'
import HoursOfOperation from './components/admin/toolsPage/subcomponents/hoursOfOperation/hoursOfOperation'
import ManageSpecials from './components/admin/toolsPage/subcomponents/manageSpecials/manageSpecials';
import SpecialDetails from './components/admin/toolsPage/subcomponents/manageSpecials/subcomponents/couponDetails/specialDetails';

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
                currentPageDisplayed === 5 ? <PopularDishesPage /> :
                  <CustomerDataPage />
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
      <MenuItemBreakdown />
      <CustomerDetails />
      <CustomTransaction />
      <HoursOfOperation />
      <ManageSpecials />
      <SpecialDetails />
    </div>
  );
}

export default App;
