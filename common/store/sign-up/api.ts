import axios from "axios";
import { JotaiApiCallback, SignInProps } from "common/types";
import { atom } from "jotai";
import { countryAtom, nameAtom, nicknameAtom, regionAtom } from ".";
import { emailAtom, passwordAtom } from "..";

export const signUpAtom = atom(
  null,
  async (get, set, { onSuccess, onFail }: JotaiApiCallback) => {
    try {
      const email = get(emailAtom);
      const password = get(passwordAtom);
      const name = get(nameAtom);
      const nickname = get(nicknameAtom);
      const country = get(countryAtom);
      const region = get(regionAtom);

      const jsonBody = {
        email,
        name,
        nickname,
        password,
        country,
        region,
      };

      const result = await axios.post("/api/user/sign-up", jsonBody);

      if (result.status === 201) {
        const payload: SignInProps = { username: email, password };
        onSuccess(payload);
      } else {
        onFail(new Error("Login Failed"));
      }
    } catch (err) {
      onFail(err);
    }
  }
);
