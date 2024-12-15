"use client";

import React, { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AddNewUserFormControls, AddNewUserFormInitialState } from "@/utils";
import { AddNewUserAction, EditUserAction } from "@/actions";
import { UserContext } from "@/context";

const AddNewUser = () => {
  const {
    openPopup,
    setOpenPopup,
    addNewUserFormData,
    setAddNewUserFormData,
    currentEditedID,
    setCurrentEditedID,
  } = useContext(UserContext);

  const handleSaveButtonValid = () => {
    return Object.keys(addNewUserFormData).every(
      (key) => addNewUserFormData[key].trim() == ""
    );
  };

  const handleAddNewUserAction = async () => {
    currentEditedID !== null
      ? await EditUserAction(
          currentEditedID,
          addNewUserFormData,
          "/user-management"
        )
      : await AddNewUserAction(addNewUserFormData, "/user-management");
    setOpenPopup(false);
    setAddNewUserFormData(AddNewUserFormInitialState);
    setCurrentEditedID(null);
  };

  return (
    <div>
      <Button onClick={() => setOpenPopup(true)}>Add New User</Button>
      <Dialog
        open={openPopup}
        onOpenChange={() => {
          setOpenPopup(false);
          setAddNewUserFormData(AddNewUserFormInitialState);
          setCurrentEditedID(null);
        }}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {currentEditedID !== null ? "Edit User" : "Add New User"}
            </DialogTitle>
          </DialogHeader>
          <form action={handleAddNewUserAction} className="grid gap-4 py-4">
            {AddNewUserFormControls.map((controlItem) => (
              <div key={controlItem.name} className="mb-4">
                <Label htmlFor={controlItem.name} className="text-left">
                  {controlItem.label}
                </Label>
                <Input
                  id={controlItem.name}
                  name={controlItem.name}
                  placeholder={controlItem.placeholder}
                  type={controlItem.type}
                  className="col-span-3"
                  value={addNewUserFormData[controlItem.name]}
                  onChange={(event) =>
                    setAddNewUserFormData({
                      ...addNewUserFormData,
                      [controlItem.name]: event.target.value,
                    })
                  }
                />
              </div>
            ))}
            <DialogFooter>
              <Button disabled={handleSaveButtonValid()} type="submit">
                Save
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddNewUser;
