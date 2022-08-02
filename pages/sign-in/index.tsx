import SignIn from "components/sign-in/SignIn";
import { Provider } from "jotai";
import React from "react";

const SignInPage = () => {
  return (
    <Provider>
      <SignIn />
    </Provider>
  );
};

export default SignInPage;
