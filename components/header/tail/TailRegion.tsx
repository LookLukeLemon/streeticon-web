import useAuth from "hooks/useAuth";
import AuthenticatedTailContainer from "./AuthenticatedTailContainer";
import NeedAuthTailContainer from "./NeedAuthTailContainer";

const TailRegion = () => {
  const { auth } = useAuth();

  return (
    <div className="md:w-64 w-fit flex items-center justify-end gap-4 px-4 md:px-8">
      {auth?.accessToken ? (
        <AuthenticatedTailContainer />
      ) : (
        <NeedAuthTailContainer />
      )}
    </div>
  );
};

export default TailRegion;
