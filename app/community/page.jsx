import getSession from "/lib/getSession";
import { redirect } from "next/navigation";
import Redirect from "/app/components/Redirect";
import LoggedInNavbar from "../components/LoggedInNavbar";

const Community = async () => {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }
  return (
    <>
      <LoggedInNavbar />
      <div>{session ? <h1>Community Page</h1> : <Redirect />}</div>
    </>
  );
};

export default Community;
