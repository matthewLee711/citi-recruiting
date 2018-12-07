import React from 'react';
import { Image, ScrollView, StyleSheet, View, Text } from 'react-native';
import { ExpoConfigView } from '@expo/samples';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
  	return (
    <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Image
            source={
              __DEV__
                ? require('../assets/images/crb-banner.jpg')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
      </View>
      <Text>Hello World</Text>
      </View>
		  );
		}
	}

		

const styles = StyleSheet.create({
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 500,
    height: 130,
    resizeMode: 'contain',
    marginTop: 0,
    marginLeft: 0,
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    // paddingTop: 15,
    backgroundColor: '#DCDCDC',
  },
});
