import React from "react";

const Redirect = () => {
  return (
    <div className="bg-green-100 w-full h-screen flex flex-col gap-2 items-center justify-center text-center font-semibold text-xl">
      <p>You need to Log in to accesss this page.</p>
      <p>Redirecting to Login...</p>
    </div>
  );
};

export default Redirect;
