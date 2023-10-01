import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  return (
    <div className="top-nav-bar__topic-list">
      {props.topics.map((data) =>
        <TopicListItem
          key={data.id}
          id={data.id}
          title={data.title}
          getPhotosByTopic={props.getPhotosByTopic}
        />
      )}
    </div>
  );
};

export default TopicList;
