import { QUERY_KEY_USER_PROFILE } from "common/Constants";
import { UserProfile } from "common/store";
import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "./useAxiosPrivate";
import { subDays } from "date-fns";

const useProfile = (onSuccess?: any, onError?: any) => {
  const axiosPrivate = useAxiosPrivate();
  const fetchProfile = async ({ signal }: any): Promise<UserProfile> => {
    return {
      name: "김진주",
      desc: "여행. 스페인어. 속기. 하늘. 날씨. 🐶꼬리",
      region: "경기",
      country: "대한민국",
      address: "",
      image: "",
      phone: "",
      email: "",
      postCount: 5,
      followerCount: 84,
      followingCount: 172,
      createdAt: subDays(new Date(), 20).toUTCString(),
    };
    // const profileResult = await axiosPrivate.get("/api/user/profile", {
    //   signal,
    // });

    // return profileResult.data;
  };

  return useQuery([QUERY_KEY_USER_PROFILE], fetchProfile, {
    onSuccess,
    onError,
  });
};

export default useProfile;
