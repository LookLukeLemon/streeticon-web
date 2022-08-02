import axios from "axios";
import { JotaiApiCallback, SignInProps } from "common/types";
import { atom } from "jotai";
import { emailAtom, passwordAtom } from "..";

export const signInAtom = atom(
  null,
  async (get, set, { onSuccess, onFail }: JotaiApiCallback) => {
    try {
      const email = get(emailAtom);
      const password = get(passwordAtom);

      const payload: SignInProps = { username: email, password };
      const response = await axios.post("/api/auth/user/sign-in", payload, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      const accessToken = response?.data?.access_token;
      onSuccess(accessToken);
    } catch (err) {
      onFail(err);
    }
  }
);
