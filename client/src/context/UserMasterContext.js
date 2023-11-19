import React, { useState, createContext } from "react";

export const UserMasterContext = createContext();

export const UserMasterContextProvider = (props) => {
  const [userMasters, setUserMasters] = useState([]);
  const [selectedUserMaster, setSelectedUserMaster] = useState(null);

  const addUserMasters = (userMaster) => {
    setUserMasters([...userMasters, userMaster]);
  };
  return (
    <UserMasterContext.Provider
      value={{
        userMasters,
        setUserMasters,
        addUserMasters,
        selectedUserMaster,
        setSelectedUserMaster,
      }}
    >
      {props.children}
    </UserMasterContext.Provider>
  );
};
