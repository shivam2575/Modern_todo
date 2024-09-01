import React from "react";
import "./Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
  const tagStyles = {
    HTML: { backgroundColor: "#fda821" },
    CSS: { backgroundColor: "#15d4c8" },
    JavaScript: { backgroundColor: "#ffd12c" },
    React: { backgroundColor: "#4cdafc" },
    default: { backgroundColor: "#f9f9f9" },
  };
  return (
    <button
      type="button"
      style={selected ? tagStyles[tagName] : tagStyles.default}
      onClick={() => selectTag(tagName)}
      className="tag"
    >
      {tagName}
    </button>
  );
};

export default Tag;
