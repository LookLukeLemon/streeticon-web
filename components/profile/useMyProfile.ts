import useAxiosPrivate from "hooks/useAxiosPrivate";
import useProfile from "hooks/useProfile";
import React from "react";
import { convertToBase64 } from "utils/ImageUtils";

const useMyProfile = (inputRef: React.RefObject<HTMLInputElement>) => {
  const axiosPrivate = useAxiosPrivate();
  const { data: profile, refetch } = useProfile();

  const handleImageChange = () => {
    inputRef.current?.click();
  };

  const handleFileChange = async (event: any) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    const thumbnailBase64 = await convertToBase64(fileObj);
    const jsonBody = {
      email: profile?.email,
      thumbnailBase64,
    };

    try {
      const result = await axiosPrivate.patch(
        "/api/user/profile/image",
        jsonBody
      );

      if (result.status === 200) {
        await refetch();
      }
    } catch (err) {
      throw err;
    } finally {
      event.target.value = null;
    }
  };

  return {
    profile,
    onImageChange: handleImageChange,
    onFileChange: handleFileChange,
  };
};

export default useMyProfile;
