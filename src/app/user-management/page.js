import AddNewUser from "@/components/add-new-user";
import React from "react";

const UserManagement = () => {
  return (
    <div className="p-20 max-w-6xl mx-auto">
      <div className="flex justify-between items-center">
        <h1>User Management</h1>
        <AddNewUser />
      </div>
    </div>
  );
};

export default UserManagement;
