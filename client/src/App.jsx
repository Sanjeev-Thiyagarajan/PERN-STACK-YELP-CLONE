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
const App = () => {
  return (
    <>
    <UMHeader/>
    <div className="content">
    <UserMasterContextProvider>
    <CustomerContextProvider>
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
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
  </UserMasterContextProvider>
  </div>
  </>
  );
};

export default App;
