"use client";

import React, { useContext } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { DeleteUserAction } from "@/actions";
import { UserContext } from "@/context";

const SingleUserCard = ({ user }) => {
  const { setOpenPopup, setAddNewUserFormData, setCurrentEditedID } =
    useContext(UserContext);

  const handleEdit = async (user) => {
    setOpenPopup(true);
    setAddNewUserFormData(user);
    setCurrentEditedID(user._id);
  };

  const handleDelete = async (currentUserId) => {
    const result = await DeleteUserAction(currentUserId, "/user-management");
    console.log(result);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {user?.firstName} {user?.lastName}
        </CardTitle>
        <CardDescription>{user?.email}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{user?.address}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={() => handleEdit(user)}>Edit</Button>
        <Button variant={"destructive"} onClick={() => handleDelete(user._id)}>
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SingleUserCard;
