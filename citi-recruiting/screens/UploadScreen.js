import React from 'react';
import { Alert, Image, ScrollView, StyleSheet, View, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Button } from 'react-native-elements';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null,
    // title: 'Digital Line',
    // headerTintColor: '#ffffff',
    // headerStyle: {
    //   backgroundColor: '#4169E1',
    // }
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
      <Text style={{fontSize:30, fontWeight:'bold', marginBottom:20}}>Resume Match</Text>
        <Text style={{fontSize:20}}>
          Let us match you to a platform at Citi! 
        </Text>

        <Text style={{fontSize:10}}>
          Just take a picture of your resume to learn more.
        </Text>
  
        <Button
          icon={{
            name: 'person-add',
            size: 15,
            color: '#EF1C24'
          }}
          title='Analyze Resume'
          buttonStyle={{
            backgroundColor: "#1B2351",
            width: 270,
            height: 75,
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5,
            marginTop: 50
          }}
          onPress={() => {
            Alert.alert('You tapped the button!');
          }}
        />

       

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
