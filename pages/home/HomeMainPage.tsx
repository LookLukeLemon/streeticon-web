import Home from "components/home/Home";
import Head from "next/head";
import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const HomeMainPage = () => {
  return (
    <div className="md:bg-zinc-50 h-full flex divide-x divide-zinc-200">
      <Head>
        <title>골목티콘</title>
        <meta name="description" content="골목티콘" />
      </Head>

      <LeftSide />
      <Home />
      <RightSide />
    </div>
  );
};

export default HomeMainPage;
