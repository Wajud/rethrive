import getSession from "@/lib/getSession";
import { redirect } from "next/navigation";

const Community = async () => {
  const session = await getSession();
  // const user = session?.user;
  if (!session) {
    redirect("/login");
  }
  return (
    <div>
      <h1>Community Page</h1>
    </div>
  );
};

export default Community;
