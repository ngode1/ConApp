import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  state = { speakers: [] };

  componentWillMount() {
    axios.get('https://cdn.jsdelivr.net/gh/ngode1/ConApp/src/utils/Data.json')
      .then(response => this.setState({ speakers: response.data }));
  }

  renderAlbums() {
    return this.state.speakers.map(speakers => <Text key={speakers.name}>{speakers.name}</Text>
    );
  }

  render() {
    console.log(this.state);

    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
