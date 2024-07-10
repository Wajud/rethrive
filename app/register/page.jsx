import Image from "next/image";
import banner from "/public/images/register-banner.png";
import Link from "next/link";
import { register } from "/actions/userActions";

const Register = () => {
  return (
    <div className="bg-green-100 grid grid-cols-2 mb-12 relative">
      <Image
        src={banner}
        className="w-full h-full max-h-[90vh]  object-cover"
        alt="banner"
      />
      <div className="pl-32 pt-16">
        <form action={register}>
          <h1 className="text-2xl font-semibold text-gray-900  mb-8">
            CREATE AN ACCOUNT
          </h1>

          <p className="text-lg capitalize mb-8">
            Let's get started with your sign up
          </p>
          <div className="flex flex-col gap-4">
            <input
              type="string"
              name="firstName"
              placeholder="First Name"
              className="block w-[70%] px-2 pb-1 pt-2 border-b-2 border-green-800 bg-green-100 focus:outline-none placeholder:text-gray-400"
            />
            <input
              type="string"
              name="lastName"
              placeholder="Last Name"
              className="block w-[70%] px-2 pb-1 pt-2 border-b-2 border-green-800 bg-green-100 focus:outline-none placeholder:text-gray-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="block w-[70%] px-2 pb-1 pt-2 border-b-2 border-green-800 bg-green-100 focus:outline-none placeholder:text-gray-400"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="block w-[70%] px-2 pb-1 pt-2 border-b-2 border-green-800 bg-green-100 focus:outline-none placeholder:text-gray-400"
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="block w-[70%] px-2 pb-1 pt-2 border-b-2 border-green-800 bg-green-100 focus:outline-none placeholder:text-gray-400"
            />
          </div>
          <button className="w-[70%] mt-10 mx-auto px-8 py-2 rounded-sm bg-green-800 hover:bg-green-700 transition-all font-semibold text-lg text-white">
            Sign Up
          </button>
          <p className="text-black mt-4 w-[70%] text-center">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Login
            </Link>
            .
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
