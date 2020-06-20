import React from 'react';
import './App.css';
import { useSelector, connect } from 'react-redux'
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
import DriverDataPage from './components/admin/overviewPage/subcomponents/driverDataPage/driverDataPage';
import ItemDrawer from './components/admin/menuPage/menuSection/subcomponents/itemDrawer/itemDrawer'
import CreateOrderDrawer from './components/admin/menuPage/menuSection/subcomponents/createOrderDrawer/createOrderDrawer'
import { AnimatePresence } from 'framer-motion'

function App(props) {
  const currentPageDisplayed = useSelector(state => state.pageDisplayed)
  return (
    <div className="App">
      <SideBar />
      <AnimatePresence exitBeforeEnter>
        {currentPageDisplayed === 0 ? <OverviewPage key='asfdfrgadfg' /> :
          currentPageDisplayed === 1 ? <MenuPage key='qw34g3q4g' /> :
            currentPageDisplayed === 2 ? <EmailPage key='weragsaerg' /> :
              currentPageDisplayed === 3 ? <ToolsPage key='aerg43qyg' /> :
                currentPageDisplayed === 4 ? <SalesBreakdown key='eshwtw5T' /> :
                  currentPageDisplayed === 5 ? <PopularDishesPage key='aewrt34t3wt' /> :
                    currentPageDisplayed === 6 ? <CustomerDataPage key='sfhgsetg5gg43' /> :
                      <DriverDataPage />
        }
      </AnimatePresence>
      {props.placingOrder ? <CreateOrderDrawer key='afh9aswfh0jiw3ef0' /> : <ItemDrawer key='sdfh0j30rjiwf0' />}
      <ManageCoupons key='098ufa0j2043t9j' />
      <ViewPreviousOrders key='fsjh0h0923jrf0k3f' />
      <AddNewDriver key='oaijsdfgokjapg' />
      <ConfirmActionModule key='kjdshafgoiejrgoerg' />
      <ItemModifiers key='sjdhfgoiwjeogwg' />
      <DriverDetails key='a0eijfg90j234fm4g' />
      <EditModifiers key='wsf0j9302porkookw4g' />
      <CouponDetails key='oifjmk3mfkpp2j3f-0' />
      <ComposeEmail key='fm230pjkmf0-3gmog' />
      <EmailDetails key='weorfjk0wfj03rf' />
      <MenuItemBreakdown key='o3jromwflkmwlkgf' />
      <CustomerDetails key='sdofknmo2k3mtg0g' />
      <CustomTransaction key='weoi0fj023jf0jf' />
      <HoursOfOperation key='oisjgf902j3gmm4g' />
      <ManageSpecials key='f9i2hj3ri0jwefmoskfg' />
      <SpecialDetails key='fiowjpo1k3mgpoj4g90' />
    </div>
  );
}

const mapStateToProps = (state) => ({
  placingOrder: state.menuPageState
})

export default connect(mapStateToProps, null)(App);
