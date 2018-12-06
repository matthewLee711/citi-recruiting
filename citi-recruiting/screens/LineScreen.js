import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Button } from 'react-native-elements';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Come Visit Us!',
  };

  render() {
    return (
      <ScrollView>
        <ScrollView style={styles.container}>
          {/* Go ahead and delete ExpoLinksView and replace it with your
            * content, we just wanted to provide you with some helpful links */}
          <ExpoLinksView />
        </ScrollView>

        <Button
          icon={{
            name: 'arrow-upward',
            size: 15,
            color: 'blue'
          }}
          title='I AM A BUTTON'
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
