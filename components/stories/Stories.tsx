import React from "react";
import StoryList from "./StoryList";
import StoryItem from "./StoryItem";
import useStories from "hooks/useStories";
import MyStory from "./MyStory";
import LoadingSpinner from "components/common/LoadingSpinner";

const Stories = () => {
  const { data: stories, isLoading } = useStories();

  if (isLoading) {
    return <LoadingSpinner />;
  }

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
