import React from "react";
import StoryList from "./StoryList";
import StoryItem from "./StoryItem";
import useStories from "hooks/useStories";
import MyStory from "./MyStory";

const Stories = () => {
  const { data: stories } = useStories();

  return (
    <StoryList>
      <MyStory />
      {stories?.map((st) => (
        <StoryItem key={st.id} {...st} />
      ))}
    </StoryList>
  );
};

export default Stories;
