import { auth } from "@/auth.js";

const getSession = async () => {
  const session = await auth();
  return session;
};

export default getSession;
