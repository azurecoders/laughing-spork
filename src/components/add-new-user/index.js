"use client";

import React, { useState } from "react";
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

const AddNewUser = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [addNewUserFormData, setAddNewUserFormData] = useState(
    AddNewUserFormInitialState
  );

  const handleSaveButtonValid = () => {
    return Object.keys(addNewUserFormData).every(
      (key) => addNewUserFormData[key].trim() == ""
    );
  };

  return (
    <div>
      <Button onClick={() => setOpenPopup(true)}>Add New User</Button>
      <Dialog
        open={openPopup}
        onOpenChange={() => {
          setOpenPopup(false);
          setAddNewUserFormData(AddNewUserFormInitialState);
        }}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New User</DialogTitle>
          </DialogHeader>
          <form className="grid gap-4 py-4">
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
          </form>
          <DialogFooter>
            <Button disabled={handleSaveButtonValid()} type="submit">
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddNewUser;
