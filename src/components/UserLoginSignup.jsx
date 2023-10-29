import React, { useState, useEffect } from "react";
import LoginButton from "./LoginButton";
import SignupButton from "./SignupButton";
import SignoutButton from "./SignoutButton";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";

const UserLoginSignup = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="flex items-center justify-between w-full px-8">
      <div>
        <h2 className="text-xl font-bold">
          {user ? (
            <span>
              Welcome, <span className="text-blue-500">{user.displayName}</span>
            </span>
          ) : (
            "Please Log In"
          )}
        </h2>
      </div>

      <div className="flex gap-4">
        {user ? <SignoutButton /> : <LoginAndSignupButtons />}
      </div>
    </div>
  );
};

const LoginAndSignupButtons = () => (
  <>
    <LoginButton />
    <SignupButton />
  </>
);

export default UserLoginSignup;
