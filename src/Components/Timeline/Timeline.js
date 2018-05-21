import React, { Component } from 'react';
import { Divider, Grid, Header, Icon, Segment } from 'semantic-ui-react';
import VideoFeedItem from '../VideoFeedItem/VideoFeedItem';
import NewsFeedItem from '../NewsFeedItem/NewsFeedItem';
import { API } from '../../Utils/api';

class Timeline extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      videoItems: [],
      newsItems: [],
      fetched: false
    };

    this.getAPIData = this.getAPIData.bind(this);
  }

  componentDidMount() {
    this.getAPIData();
  }

  getAPIData() {
    return API().then(data => {
      let videoItems = [];
      let newsItems = [];

      data.forEach(item => {
        if (item.entity_type === 'video') {
          videoItems.push(item);
        } else {
          newsItems.push(item);
        }
      });

      this.setState({
        data,
        videoItems,
        newsItems,
        fetched: true
      });
    });
  }

  itemType(item, index) {
    if (item.entity_type === 'video') {
      return (
        <Grid.Column>
          <VideoFeedItem item={item} key={`Video-${index}`} />
        </Grid.Column>
      );
    }

    return <NewsFeedItem item={item} key={`News-${index}`} />;
  }

  render() {
    const { videoItems, newsItems, fetched } = this.state;

    return (
      <div>
        <Segment>
          <Divider horizontal>
            <Header as="h2" icon textAlign="center">
              <Icon name="youtube" />
              <Header.Content>Videos</Header.Content>
            </Header>
          </Divider>
          <br />
          <br />
          <Grid relaxed columns={4}>
            {fetched && videoItems.length > 0
              ? videoItems.map((item, index) => this.itemType(item, index))
              : null}
          </Grid>
        </Segment>
        <Segment>
          <Divider horizontal>
            <Header as="h2" icon textAlign="center">
              <Icon name="users" />
              <Header.Content>Feed</Header.Content>
            </Header>
          </Divider>
          <br />
          <br />
          <Grid relaxed columns={4}>
            {fetched && newsItems.length > 0
              ? newsItems.map((item, index) => this.itemType(item, index))
              : null}
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default Timeline;
