import { LOGIN, SIGN_UP } from "common/Constants";
import { useRouter } from "next/router";
import React, { memo, useCallback } from "react";

const NeedAuthTailContainerCore = ({
  onSignIn,
  onSignUp,
}: {
  onSignIn: () => void;
  onSignUp: () => void;
}) => {
  return (
    <div className="flex gap-4">
      <button className="btn btn--primary" onClick={onSignIn}>
        {LOGIN}
      </button>
      <button className="btn" onClick={onSignUp}>
        {SIGN_UP}
      </button>
    </div>
  );
};

const MemoizedNeedAuthTailContainerCore = memo(NeedAuthTailContainerCore);

const NeedAuthTailContainer = () => {
  const router = useRouter();

  const handleSignIn = useCallback(() => {
    router.push("/sign-in");
  }, []);

  const handleSignUp = useCallback(() => {
    router.push("/sign-up");
  }, []);

  return (
    <MemoizedNeedAuthTailContainerCore
      onSignIn={handleSignIn}
      onSignUp={handleSignUp}
    />
  );
};

export default NeedAuthTailContainer;
