import useSuggestions from "hooks/useSuggestions";
import React from "react";
import SuggestionItem from "./SuggestionItem";
import SuggestionList from "./SuggestionList";

const Suggestions = () => {
  const { data: suggestions } = useSuggestions();
  return (
    <SuggestionList>
      {suggestions?.map((sg) => (
        <SuggestionItem key={sg.title} {...sg} />
      ))}
    </SuggestionList>
  );
};

export default Suggestions;
