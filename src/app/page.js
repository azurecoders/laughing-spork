import { FetchUsersAction } from "@/actions";
import AddNewUser from "@/components/add-new-user";
import SingleUserCard from "@/components/single-user-card";
import React from "react";

const UserManagement = async () => {
  const getListOfUsers = await FetchUsersAction();

  return (
    <div className="p-20 max-w-6xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">User Management</h1>
        <AddNewUser />
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
        {getListOfUsers &&
        getListOfUsers.data &&
        getListOfUsers.data.length > 0 ? (
          getListOfUsers.data.map((user) => (
            <SingleUserCard key={user._id} user={user} />
          ))
        ) : (
          <h3>No Users Found</h3>
        )}
      </div>
    </div>
  );
};

export default UserManagement;
