import getSession from "@/lib/getSession";
import { redirect } from "next/navigation";
import React from "react";

const Therapy = async () => {
  const session = await getSession();
  // const user = session?.user;
  if (!session) {
    redirect("/login");
  }
  return (
    <div>
      <h1 className="h-[100vh]">Therapy Page</h1>
    </div>
  );
};

export default Therapy;
