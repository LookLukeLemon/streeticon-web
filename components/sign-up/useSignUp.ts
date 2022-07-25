import { useState } from "react";

const useSignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("대한민국");
  const [region, setRegion] = useState("");

  const handleChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    if (name === "name") {
      setName(e.target.value);
    } else if (name === "nickname") {
      setNickname(e.target.value);
    } else if (name === "password") {
      setPassword(e.target.value);
    } else if (name === "email") {
      setEmail(e.target.value);
    } else if (name === "country") {
      setCountry(e.target.value);
    } else if (name === "region") {
      setRegion(e.target.value);
    }
  };

  return {
    email,
    name,
    nickname,
    password,
    country,
    region,
    onChange: handleChange,
  };
};

export default useSignUp;
