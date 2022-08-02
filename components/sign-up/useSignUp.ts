import { emailAtom, passwordAtom } from "common/store";
import {
  countryAtom,
  nameAtom,
  nicknameAtom,
  regionAtom,
} from "common/store/sign-up";
import { signUpAtom } from "common/store/sign-up/api";
import { InputChangeProps } from "common/types";
import { useSetAtom } from "jotai";

const useSignUp = () => {
  const setEmail = useSetAtom(emailAtom);
  const setName = useSetAtom(nameAtom);
  const setNickname = useSetAtom(nicknameAtom);
  const setPassword = useSetAtom(passwordAtom);
  const setCountry = useSetAtom(countryAtom);
  const setRegion = useSetAtom(regionAtom);
  const signUp = useSetAtom(signUpAtom);

  const handleChange = ({ name, value }: InputChangeProps) => {
    if (name === "name") {
      setName(value);
    } else if (name === "nickname") {
      setNickname(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "country") {
      setCountry(value);
    } else if (name === "region") {
      setRegion(value);
    }
  };

  return {
    onChange: handleChange,
    signUp,
  };
};

export default useSignUp;
