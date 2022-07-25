import axios from "axios";
import { SignInProps } from "common/store";
import useAuth from "hooks/useAuth";
import { useRouter } from "next/router";

const useSignInApi = () => {
  const router = useRouter();
  const { setAuth } = useAuth();
  const handleSubmit = async ({
    e,
    email,
    password,
  }: {
    e: any;
    email: string;
    password: string;
  }) => {
    e.preventDefault();

    try {
      const payload: SignInProps = { username: email, password };

      const response = await axios.post("/api/auth/user/sign-in", payload, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      const accessToken = response?.data?.access_token;
      setAuth({ accessToken });
      router.replace("/");
    } catch (err) {
      // FIXME: 메시지 토스트
    }
  };

  return { onSubmit: handleSubmit };
};

export default useSignInApi;
