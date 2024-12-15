"use server";

const { connectToDB } = require("@/database");
const { default: User } = require("@/models/user");

// Add New User action

const AddNewUserAction = async (formData) => {
  await connectToDB();
  try {
    const newlyCreatedUser = await User.create(formData);
    if (!newlyCreatedUser) {
      return {
        success: false,
        message: "Some error occured! Please try again",
      };
    }

    return {
      success: true,
      message: "User added succesfully",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Some error occured! Please try again",
    };
  }
};

// Fetch users action
// Edit a user action
// Delete a user action
