import { useRouter } from "next/router";

const useLogo = () => {
  const router = useRouter();

  const handleGotoHome = () => {
    router.replace("/");
  };

  return { onGotoHome: handleGotoHome };
};

export default useLogo;
