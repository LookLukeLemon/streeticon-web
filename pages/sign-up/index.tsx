import SignUp from "components/sign-up/SignUp";
import { Provider } from "jotai";
import React from "react";

const SignUpPage = () => {
  return (
    <Provider>
      <SignUp />
    </Provider>
  );
};

export default SignUpPage;
