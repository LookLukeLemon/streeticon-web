import { APP_TITLE } from "common/Constants";
import BaseImage from "components/common/BaseImage";
import React from "react";
import LogoImage from "public/images/logo-icon.svg";

const LogoRegion = () => {
  return (
    <div className="md:w-64 w-fit flex pl-4 md:px-8 items-center space-x-4">
      <div className="relative w-8 aspect-square">
        <BaseImage src={LogoImage} layout="fill" objectFit="contain" />
      </div>
      <h1 className="hidden md:block">{APP_TITLE}</h1>
    </div>
  );
};

export default LogoRegion;
