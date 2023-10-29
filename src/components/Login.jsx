import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import InputControl from "./InputControl";
import { auth } from "./Firebase";

function Login() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmission = async () => {
    try {
      if (!values.email || !values.pass) {
        setErrorMsg("Fill in all fields");
        return;
      }

      setErrorMsg("");
      setSubmitButtonDisabled(true);

      await signInWithEmailAndPassword(auth, values.email, values.pass);
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
        <h1 className="text-2xl font-bold">Login</h1>

        <InputControl
          label="Email"
          name="email"
          value={values.email}
          onChange={handleInputChange}
          placeholder="Enter Email Address"
        />
        <InputControl
          label="Password"
          name="pass"
          value={values.pass}
          onChange={handleInputChange}
          placeholder="Enter Password"
          type="password"
        />

        <div className="space-y-4">
          {errorMsg && (
            <b className="font-semibold text-center text-red-600">{errorMsg}</b>
          )}
          <button
            disabled={submitButtonDisabled}
            onClick={handleSubmission}
            className="w-full py-2 text-xl font-bold text-white transition bg-[#4fa99f] rounded-md hover:bg-[#248378]"
          >
            {submitButtonDisabled ? "Logging in..." : "Login"}
          </button>
          <p className="font-semibold text-black">
            Already have an account?{" "}
            <Link to="/signup" className="font-bold text-[#4fa99f]">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
