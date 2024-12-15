"use client";

const { default: UserState } = require("@/context");

const CommonLayout = ({ children }) => {
  return <UserState>{children}</UserState>;
};

export default CommonLayout;
