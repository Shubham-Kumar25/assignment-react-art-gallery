import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import InputControl from "./InputControl";
import { auth } from "./Firebase";

function Signup() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleInputChange = (event, fieldName) => {
    const newValue = event.target.value;
    setValues((prevValues) => ({
      ...prevValues,
      [fieldName]: newValue,
    }));
  };

  const handleSubmission = async () => {
    try {
      const { name, email, pass } = values;
      if (!name || !email || !pass) {
        setErrorMsg("Please fill in all fields.");
        return;
      }

      setErrorMsg("");
      setSubmitButtonDisabled(true);

      const res = await createUserWithEmailAndPassword(auth, email, pass);
      const user = res.user;

      await updateProfile(user, {
        displayName: name,
      });

      setSubmitButtonDisabled(false);
      navigate("/");
    } catch (error) {
      setSubmitButtonDisabled(false);
      setErrorMsg(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="min-w-[480px] bg-white shadow-md p-6 rounded-lg space-y-6">
        <h1 className="text-2xl font-bold">Signup</h1>

        <InputControl
          label="Name"
          placeholder="Enter Your Name"
          onChange={(event) => handleInputChange(event, "name")}
        />
        <InputControl
          label="Email"
          placeholder="Enter Email Address"
          onChange={(event) => handleInputChange(event, "email")}
        />
        <InputControl
          label="Password"
          type="password"
          placeholder="Enter Password"
          onChange={(event) => handleInputChange(event, "pass")}
        />

        <div className="space-y-4">
          {errorMsg && (
            <b className="font-semibold text-center text-red-600">{errorMsg}</b>
          )}
          <button
            onClick={handleSubmission}
            disabled={submitButtonDisabled}
            className="w-full py-2 text-xl font-bold text-white transition bg-[#4fa99f] rounded-md hover:bg-[#248378]"
          >
            {submitButtonDisabled ? "Signing up..." : "Signup"}
          </button>
          <p className="font-semibold text-black">
            Already have an Account?{" "}
            <Link to="/login" className="font-bold text-[#4fa99f]">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
