import { emailAtom, passwordAtom } from "common/store/sign-in";
import { signInAtom } from "common/store/sign-in/api";
import { SignInChangeProps } from "common/types";
import { useSetAtom } from "jotai";

const useSignIn = () => {
  const setEmail = useSetAtom(emailAtom);
  const setPassword = useSetAtom(passwordAtom);
  const signIn = useSetAtom(signInAtom);

  const handleChange = ({ name, value }: SignInChangeProps) => {
    if (name === "password") {
      setPassword(value);
    } else if (name === "email") {
      setEmail(value);
    }
  };

  return { onChange: handleChange, signIn };
};

export default useSignIn;
