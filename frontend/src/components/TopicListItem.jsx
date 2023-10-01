import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  return (
    <div onClick={() => props.getPhotosByTopic(props.id)} className="topic-list__item">
      <span>{props.title}</span>
    </div>
  );
};

export default TopicListItem;
