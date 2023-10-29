import React from "react";
import { Link } from "react-router-dom";

const SignupButton = () => {
  return (
    <Link to="/signup">
      <div className="w-24 h-12 text-base font-semibold rounded-lg bg-[#88C2BB] flex items-center justify-center text-white cursor-pointer transform hover:scale-105 transition-transform">
        Signup
      </div>
    </Link>
  );
};

export default SignupButton;
