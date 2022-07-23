import { QUERY_KEY_SUGGESTIONS } from "common/Constants";
import { SuggestionSummary } from "common/store";
import { useQuery } from "@tanstack/react-query";
import BlueBottleLogo from "public/images/bluebottle-logo.svg";
import StarbucksLogo from "public/images/starbucks-logo.svg";
import WomenImage1 from "public/images/women-1.jpg";
import MenImage1 from "public/images/men-1.jpg";
import useAxiosPrivate from "./useAxiosPrivate";

const mockSuggestions: SuggestionSummary[] = [
  {
    image: BlueBottleLogo,
    title: "블루보틀",
    desc: "콜시츠키와 최초의 블루보틀",
  },
  {
    image: WomenImage1,
    title: "쥴리",
    desc: "여행과 커피를 사랑하는 평범한 여자입니다.",
  },
  {
    image: StarbucksLogo,
    title: "스타벅스",
    desc: "한국적인 디자인",
  },
  {
    image: MenImage1,
    title: "스테판",
    desc: "그린테라스의 바리스타로 일하고 있습니다.",
  },
  {
    image: BlueBottleLogo,
    title: "블루보틀",
    desc: "콜시츠키와 최초의 블루보틀",
  },
  {
    image: WomenImage1,
    title: "쥴리",
    desc: "여행과 커피를 사랑하는 평범한 여자입니다.",
  },
  {
    image: StarbucksLogo,
    title: "스타벅스",
    desc: "한국적인 디자인",
  },
  {
    image: MenImage1,
    title: "스테판",
    desc: "그린테라스의 바리스타로 일하고 있습니다.",
  },
];

const useSuggestions = (onSuccess?: any, onError?: any) => {
  const axiosPrivate = useAxiosPrivate();
  const fetchSuggestions = async ({
    signal,
  }: any): Promise<SuggestionSummary[]> => {
    return mockSuggestions;
    // const storiesResult = await axiosPrivate.get("/api/stories", {
    //   signal,
    // });

    // return storiesResult.data;
  };

  return useQuery([QUERY_KEY_SUGGESTIONS], fetchSuggestions, {
    onSuccess,
    onError,
    suspense: true,
  });
};

export default useSuggestions;
