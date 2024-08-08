import getSession from "/lib/getSession";
import { redirect } from "next/navigation";
import React from "react";
import Redirect from "/app/components/Redirect";
import LoggedInNavbar from "../components/LoggedInNavbar";

import TherapyPage from "../../app/components/therapyPage";

const Therapy = async ({ searchParams }) => {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }
  return (
    <div>
      <LoggedInNavbar />
      <div>
        {session ? <TherapyPage searchParams={searchParams} /> : <Redirect />}
      </div>
    </div>
  );
};

export default Therapy;
