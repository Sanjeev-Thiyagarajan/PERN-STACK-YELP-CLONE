import React, { useState, createContext } from "react";

export const CustomerContext = createContext();

export const CustomerContextProvider = (props) => {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const addCustomers = (customer) => {
    setCustomers([...customers, customer]);
  };
  return (
    <CustomerContext.Provider
      value={{
        customers,
        setCustomers,
        addCustomers,
        selectedCustomer,
        setSelectedCustomer,
      }}
    >
      {props.children}
    </CustomerContext.Provider>
  );
};
