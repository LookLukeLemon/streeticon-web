import { useRouter } from "next/router";
import { useCallback } from "react";

const useLogo = () => {
  const router = useRouter();

  const handleGotoHome = useCallback(() => {
    router.replace("/");
  }, []);

  return { onGotoHome: handleGotoHome };
};

export default useLogo;
