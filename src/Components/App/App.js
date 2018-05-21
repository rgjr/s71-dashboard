import React, { Component } from 'react';
import '../../Styles/App.css';
import Timeline from '../Timeline/Timeline';
import { Container } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Timeline />
        </Container>
      </div>
    );
  }
}

export default App;
