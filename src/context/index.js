"use client";

import { AddNewUserFormInitialState } from "@/utils";
import { createContext, useState } from "react";

export const UserContext = createContext(null);

const UserState = ({ children }) => {
  const [currentEditedID, setCurrentEditedID] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);
  const [addNewUserFormData, setAddNewUserFormData] = useState(
    AddNewUserFormInitialState
  );

  return (
    <UserContext.Provider
      value={{
        currentEditedID,
        setCurrentEditedID,
        openPopup,
        setOpenPopup,
        addNewUserFormData,
        setAddNewUserFormData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserState;
