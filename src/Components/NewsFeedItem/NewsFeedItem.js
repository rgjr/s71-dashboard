import React from 'react';
import { Card, Grid, Image } from 'semantic-ui-react';

const NewsFeedItem = props => {
  const { entity_id, est_subs, message, thumbnail } = props.item;

  return (
    <Grid.Column>
      <Card>
        <Card.Content textAlign="center">
          <a href={`https://www.youtube.com/channel/${entity_id}`}>
            <Card.Header>
              <Image
                circular
                size="tiny"
                src={
                  thumbnail ? thumbnail : 'http://via.placeholder.com/100x100'
                }
              />
            </Card.Header>
          </a>
          <Card.Meta>
            <br />
            {est_subs ? `Subscribers: ${est_subs}` : ''}
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Card.Description>{message}</Card.Description>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
};

export default NewsFeedItem;
