import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import UpdateUMPage from "./components/UM/UpdateUMPage";
import UserMasterDetailPage from "./components/UM/UserMasterDetailPage";
import { UserMasterContextProvider } from "./context/UserMasterContext";
import AddUserMaster from "./components/UM/AddUserMaster";
import UserMasterList from "./components/UM/UserMasterList";
import { CustomerContextProvider } from "./context/CustomerContext";
import AddCustomer from "./components/Customers/AddCustomers";
import UpdateCustomer from "./components/Customers/UpdateCustomer";
import CustomerDetailPage from "./components/Customers/CustomerDetailPage";
import UMHeader from "./components/UM/UMHeader";
import CustomerList from "./components/Customers/CustomerList";
import './css/App.css';
import LoginPage from "./routes/LoginPage";
import RegisterForm from "./routes/RegisterForm";
import { VolunteerContextProvider } from "./context/VolunteerContext";
import AddVolunteer from "./components/Volunteers/AddVolunteer";
import VolunteerList from "./components/Volunteers/VolunteerList";
import UpdateVolunteer from "./components/Volunteers/UpdateVolunteer";
import VolunteerDetailPage from "./components/Volunteers/VolunteerDetailPage";
const App = () => {
  return (
    <>
    <UMHeader/>
    <div className="content">
    <UserMasterContextProvider>
    <VolunteerContextProvider>
    <CustomerContextProvider>
      <div className="container">
        <Router>
          <Switch>
            
          <Route exact path="/register" component={RegisterForm} />
            <Route exact path="/" component={LoginPage} />
            
            <Route exact path="/home" component={Home} />
            

            {/* User Master Routes */}
            <Route exact path="/userMasters" >
                <AddUserMaster/>
                <UserMasterList/>
            </Route>
            <Route exact path="/userMasters/:um_seq/update"
              component={UpdateUMPage}
            />
            <Route exact path="/userMasters/:um_seq"
              component={UserMasterDetailPage}
            />

            {/* Volunteer Routes */}
            <Route exact path="/volunteers" >
                <AddVolunteer/>
                <VolunteerList/>
            </Route>
            <Route exact path="/volunteers/:vol_id/update"
              component={UpdateVolunteer}
            />
            <Route exact path="/volunteers/:vol_id"
              component={VolunteerDetailPage}
            />

          <Route exact path="/customers" >
            <AddCustomer/>
            <CustomerList/>
          </Route>
          <Route
            exact
            path="/customers/:customer_id/update"
            component={UpdateCustomer}
          />
          <Route
            exact
            path="/customers/:customer_id"
            component={CustomerDetailPage}
          />
        </Switch>
      </Router>
      </div>
  </CustomerContextProvider>
  </VolunteerContextProvider>
  </UserMasterContextProvider>
  </div>
  </>
  );
};

export default App;
