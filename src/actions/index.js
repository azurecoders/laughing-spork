"use server";

import { List } from "lucide-react";
import { revalidatePath } from "next/cache";

const { connectToDB } = require("@/database");
const { default: User } = require("@/models/user");

// Add New User action

export const AddNewUserAction = async (formData, pathToRevalidate) => {
  await connectToDB();
  try {
    const newlyCreatedUser = await User.create(formData);
    if (!newlyCreatedUser) {
      return {
        success: false,
        message: "Some error occured! Please try again",
      };
    }

    revalidatePath(pathToRevalidate);
    return {
      success: true,
      message: "User added succesfully",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Some error occured! Please try again",
      error: error,
    };
  }
};

// Fetch users action

export const FetchUsersAction = async () => {
  await connectToDB();
  try {
    const ListOfUsers = await User.find({});
    if (!ListOfUsers) {
      return {
        success: false,
        message: "Something went wrong! Please try again",
      };
    }

    return {
      success: true,
      data: JSON.parse(JSON.stringify(ListOfUsers)),
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Something went wrong! Please try again",
    };
  }
};

// Edit a user action

export const EditUserAction = async (
  currentUserID,
  formData,
  pathToRevalidate
) => {
  await connectToDB();
  try {
    const { firstName, lastName, email, address } = formData;

    const updatedUser = await User.findOneAndUpdate(
      { _id: currentUserID },
      {
        $set: {
          firstName,
          lastName,
          email,
          address,
        },
      },
      {
        new: true,
      }
    );

    if (!updatedUser)
      return {
        success: false,
        message: "Not able to update the user! Please try again",
      };

    revalidatePath(pathToRevalidate);
    return {
      success: true,
      message: "User Updated Successfuly",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Something went wrong! Please try again",
    };
  }
};

// Delete a user action

export const DeleteUserAction = async (currentUserId, pathToRevalidate) => {
  await connectToDB();
  try {
    const deletedUser = await User.findByIdAndDelete(currentUserId);

    if (!deletedUser)
      return {
        success: false,
        message: "Not able to perform delete operation! Please try again later",
      };

    revalidatePath(pathToRevalidate);
    return {
      success: true,
      message: "User deleted successfuly",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Something went wrong! Please try again",
    };
  }
};
