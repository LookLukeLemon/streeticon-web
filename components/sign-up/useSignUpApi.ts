import axios from "axios";
import { SignInProps } from "common/store";
import useAuth from "hooks/useAuth";
import { useRouter } from "next/router";

const useSignUpApi = () => {
  const router = useRouter();
  const { setAuth } = useAuth();
  const handleSubmit = async ({
    e,
    email,
    name,
    nickname,
    password,
    country,
    region,
  }: {
    e: any;
    email: string;
    name: string;
    nickname: string;
    password: string;
    country: string;
    region: string;
  }) => {
    e.preventDefault();

    const jsonBody = {
      email,
      name,
      nickname,
      password,
      country,
      region,
    };

    try {
      const result = await axios.post("/api/user/sign-up", jsonBody);

      if (result.status === 201) {
        const payload: SignInProps = { username: email, password };

        const response = await axios.post("/api/auth/user/sign-in", payload, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });

        const accessToken = response?.data?.access_token;
        setAuth({ accessToken });
        router.replace("/");
      }
    } catch (err) {
      // FIXME: 메시지 토스트
    }
  };

  return { onSubmit: handleSubmit };
};

export default useSignUpApi;
