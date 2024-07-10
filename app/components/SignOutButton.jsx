import React from "react";
import { logOut } from "../../actions/userActions";

const SignOutButton = ({ text }) => {
  return (
    <form action={logOut}>
      <button>{text}</button>
    </form>
  );
};

export default SignOutButton;
