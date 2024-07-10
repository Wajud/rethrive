import React from "react";
import Image from "next/image";

const Settings = () => {
  return (
    <div className="bg-green-50 pl-24 pt-24 pb-16 grid grid-cols-2 gap-16 text-green-700">
      <div>
        <form className="">
          <div className="flex gap-8 mb-12">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrBp4rAadRiXmk6NWl3redkvGJgWGDkBT4vA&usqp=CAU"
              width={100}
              height={100}
              className="w-24 h-24 object-cover rounded-full float-left mr-12"
            />
            <div className="flex-1 ml-60">
              <label htmlFor="about" className="block mb-1">
                About Me
              </label>
              <textarea
                id="about"
                name="about"
                placeholder="About Me..."
                className="block w-[34rem] px-2 pb-1 pt-2 rounded-md border border-green-400 bg-green-100 focus:outline-none placeholder:text-gray-400 resize-none"
                rows={5}
              ></textarea>
            </div>
          </div>

          <div className="flex gap-24">
            <div>
              <label htmlFor="username" className="mb-1 block">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="block w-80 px-2 pb-1 pt-2 border-b-2 border-green-800 bg-green-100 focus:outline-none placeholder:text-gray-400"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="block w-80 px-2 pb-1 pt-2 border-b-2 border-green-800 bg-green-100 focus:outline-none placeholder:text-gray-400"
              />
            </div>
          </div>
          <div className="flex items-end gap-24 mt-8">
            <div>
              <label htmlFor="city" className="block mb-1">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className="block w-80 px-2 pb-1 pt-2 border-b-2 border-green-800 bg-green-100 focus:outline-none placeholder:text-gray-400"
              />
            </div>
            <div>
              <label htmlFor="state" className="block mb-1">
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                className="block w-80 px-2 pb-1 pt-2 border-b-2 border-green-800 bg-green-100 focus:outline-none placeholder:text-gray-400"
              />
            </div>
            <button className="uppercase text-white block w-fit font-semibold px-12 py-2 rounded-md bg-green-800 hover:bg-green-600 transition-all">
              save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
