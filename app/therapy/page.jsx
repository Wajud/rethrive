import getSession from "/lib/getSession";
import { redirect } from "next/navigation";
import React from "react";
import Redirect from "/app/components/Redirect";
import LoggedInNavbar from "../components/LoggedInNavbar";

const Therapy = async () => {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }
  return (
    <div>
      <LoggedInNavbar />
      <div>{session ? <h1>Community Page</h1> : <Redirect />}</div>
    </div>
  );
};

export default Therapy;
