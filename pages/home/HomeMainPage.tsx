import Home from "components/home/Home";
import Head from "next/head";
import React from "react";
import RightSide from "./RightSide";

const HomeMainPage = () => {
  return (
    <div className="h-full flex mx-auto max-w-5xl">
      <Head>
        <title>골목티콘</title>
        <meta name="description" content="골목티콘" />
      </Head>

      <Home />
      <RightSide />
    </div>
  );
};

export default HomeMainPage;
