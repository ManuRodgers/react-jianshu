import React from 'react';
import { List, Avatar, Button, Skeleton } from 'antd';

const Writer = ({ initLoading, loadMore, list }) => (
  <div className={`writer`}>
    <List
      header={
        <div>
          <h3>Related Users</h3> from{` `}
          <span>
            <a target={`_blank`} href="https://randomuser.me/api/">
              https://randomuser.me/api/
            </a>{' '}
          </span>
        </div>
      }
      className="demo-loadmore-list"
      loading={initLoading}
      itemLayout="horizontal"
      loadMore={loadMore}
      dataSource={list}
      renderItem={item => {
        return (
          <List.Item actions={[<a>+ follow</a>]}>
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={<Avatar src={item.picture ? item.picture.medium : ``} />}
                title={
                  <a href="https://ant.design">
                    {item.name.first} {item.name.last}
                  </a>
                }
              />
            </Skeleton>
          </List.Item>
        );
      }}
    />
  </div>
);

export default Writer;
