import { useState } from "react";

const useSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    if (name === "password") {
      setPassword(e.target.value);
    } else if (name === "email") {
      setEmail(e.target.value);
    }
  };

  return {
    email,
    password,
    onChange: handleChange,
  };
};

export default useSignIn;
