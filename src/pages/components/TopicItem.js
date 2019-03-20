import React from 'react';
const TopicItem = ({ topic }) => (
  <a href={topic.website} target={`_blank`} className={`topicItem`}>
    <img src={topic.img} alt={`topic item`} />
    <span>{topic.title}</span>
  </a>
);

export default TopicItem;
