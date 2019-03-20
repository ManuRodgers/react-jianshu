import React from 'react';
import { Avatar, Card, Icon } from 'antd';
const { Meta } = Card;
const ArticleItem = ({ article }) => (
  <Card
    style={{ width: 625 }}
    key={article.id}
    actions={[
      <div>
        <Icon type="eye" /> <span>{article.watch}</span>
      </div>,
      <div>
        <Icon type="star" /> <span>{article.star}</span>
      </div>,
      <div>
        <Icon type="share-alt" />
        <span>{article.fork}</span>
      </div>,
    ]}
  >
    <Meta
      avatar={<Avatar src={article.img} />}
      title={article.title}
      description={article.description}
    />
  </Card>
);

export default ArticleItem;
