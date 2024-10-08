import React from "react";
import Image from "next/image";
import Link from "next/link";
import getSession from "/lib/getSession";
import { redirect } from "next/navigation";
import Redirect from "/app/components/Redirect";
import { User } from "../../models/userModel";
import connectToDb from "../../lib/db";

const Profile = async () => {
  const session = await getSession();
  let user = session?.user;
  if (!session) {
    redirect("/login");
  }
  await connectToDb();
  user = await User.findById(user.id);
  console.log("user in profile page: ", session.user);
  return (
    <div className="">
      {session ? (
        <div className=" w-full pl-24 pr-12 pt-24 pb-16 grid grid-cols-2 gap-16 text-green-700">
          <div className="">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrBp4rAadRiXmk6NWl3redkvGJgWGDkBT4vA&usqp=CAU"
              width={100}
              height={100}
              className="w-24 h-24 object-cover rounded-full"
            />
            <h2 className="font-semibold text-2xl uppercase my-8">About Me</h2>
            <p className="leading-loose">
              {user.about ||
                "I'm an individual seeking personal growth and self-improvement. I'm committed to prioritizing my mental health and well-being through therapy and self-care. I am looking forward to connecting with a supportive community and working towards a happier, healthier me."}
            </p>
          </div>
          <div className="py-16 pl-20 ">
            <h1 className="mb-8 text-xl font-semibold">
              Hi, I'm {user.userName || user.firstName || "Amaka"}
            </h1>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <p className="w-12">Email:</p>
                <p>{user.email || "amaka@gmail.com"}</p>
              </div>
              <div className="flex gap-4">
                <p className="w-12">City:</p>
                <p>{user.city || "Akure"}</p>
              </div>
              <div className="flex gap-4">
                <p className="w-12">State:</p>
                <p>{user.state || "Ondo"}</p>
              </div>
              <div className="flex gap-4">
                <p className="w-12">Role:</p>
                <p>User</p>
              </div>
            </div>
            <Link
              href="profile/settings"
              className="uppercase text-white block w-fit mr-12 mt-12 mb-16 font-semibold px-4 py-2 rounded-md bg-green-800 hover:bg-green-600 transition-all"
            >
              Edit Profile
            </Link>
          </div>
        </div>
      ) : (
        <Redirect />
      )}
    </div>
  );
};

export default Profile;
