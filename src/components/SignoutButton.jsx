import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "./Firebase";

const SignoutButton = ({ onSignout }) => {
  const handleSignout = async () => {
    try {
      await signOut(auth);
      onSignout();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      onClick={handleSignout}
      className="w-24 h-12 text-base font-semibold rounded-lg bg-[#4fa99f] text-white cursor-pointer hover:scale-105 transition-transform"
    >
      Sign Out
    </button>
  );
};

export default SignoutButton;
