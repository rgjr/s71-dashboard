import React from 'react';
import { Card, Divider, Embed, Icon } from 'semantic-ui-react';

const VideoFeed = props => {
  const {
    title,
    channel_id,
    channel_title,
    entity_id,
    thumbnail,
    message
  } = props.item;

  return (
    <Card centered>
      <Embed
        id={entity_id}
        placeholder={
          thumbnail ? thumbnail : 'http://via.placeholder.com/350x150'
        }
        source="youtube"
        aspectRatio="16:9"
        hd
      />
      <Card.Content>
        <Card.Header textAlign="center">{title}</Card.Header>
        <Divider />
        <Card.Description>{message}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href={`https://www.youtube.com/channel/${channel_id}`}>
          <Icon name="youtube" color="red" />
          <span>{channel_title}</span>
          <Icon name="external" corner className="right" />
        </a>
      </Card.Content>
    </Card>
  );
};

export default VideoFeed;
