import { QUERY_KEY_STORIES } from "common/Constants";
import { StorySummary } from "common/store";
import { useQuery } from "@tanstack/react-query";
import WomenImage1 from "public/images/women-1.jpg";
import WomenImage2 from "public/images/women-2.jpg";
import WomenImage3 from "public/images/women-3.jpg";
import WomenImage4 from "public/images/women-4.jpg";
import MenImage1 from "public/images/men-1.jpg";
import MenImage2 from "public/images/men-2.jpg";
import useAxiosPrivate from "./useAxiosPrivate";
import { nanoid } from "nanoid";

const mockStories: StorySummary[] = [
  {
    id: nanoid(),
    image: WomenImage1,
    name: "퍼데나",
  },
  {
    id: nanoid(),
    image: WomenImage2,
    name: "벤 샤르",
  },
  {
    id: nanoid(),
    image: WomenImage3,
    name: "스튜카",
  },
  {
    id: nanoid(),
    image: WomenImage4,
    name: "제니",
  },
  {
    id: nanoid(),
    image: MenImage2,
    name: "루이스",
  },
  {
    id: nanoid(),
    image: MenImage1,
    name: "피를로",
  },
];

const useStories = (onSuccess?: any, onError?: any) => {
  const axiosPrivate = useAxiosPrivate();
  const fetchStories = async ({ signal }: any): Promise<StorySummary[]> => {
    return mockStories;
    // const storiesResult = await axiosPrivate.get("/api/stories", {
    //   signal,
    // });

    // return storiesResult.data;
  };

  return useQuery([QUERY_KEY_STORIES], fetchStories, {
    onSuccess,
    onError,
    suspense: true,
  });
};

export default useStories;
