import { useRouter } from "next/router";
import React from "react";

const ProfilePage = () => {
  const router = useRouter();
  const { nickname } = router.query;
  return <div>{`Hello ${nickname}`}</div>;
};

export default ProfilePage;
