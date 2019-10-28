import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import PropTypes from 'prop-types';

// import { Container } from './styles';

export default class Star extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('star').name,
  });

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  render() {
    const { navigation } = this.props;
    return (
      <WebView
        source={{ uri: navigation.getParam('star').html_url }}
        style={{ flex: 1 }}
      />
    );
  }
}
