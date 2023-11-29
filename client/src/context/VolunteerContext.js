import React, { useState, createContext } from "react";

export const VolunteerContext = createContext();

export const VolunteerContextProvider = (props) => {
  const [volunteers, setVolunteers] = useState([]);
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);

  const addVolunteers = (volunteer) => {
    setVolunteers([...volunteers, volunteer]);
  };
  return (
    <VolunteerContext.Provider
      value={{
        volunteers,
        setVolunteers,
        addVolunteers,
        selectedVolunteer,
        setSelectedVolunteer,
      }}
    >
      {props.children}
    </VolunteerContext.Provider>
  );
};
