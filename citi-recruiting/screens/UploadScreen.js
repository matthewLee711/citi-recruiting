'use strict';
import React from 'react';
import { Alert, Image, ScrollView, StyleSheet, View, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Button } from 'react-native-elements';
import { ImagePicker } from 'expo';



export default class SettingsScreen extends React.Component {

  static navigationOptions = {
    header: null
  };

  state = {
    pickedImage: null
  }

  _pickImage = async () => {
    const { Permissions } = Expo;
    const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    console.info('status = ' + JSON.stringify(status));
    if (status === 'granted') {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });

      console.log(result);

      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }
    }
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

        <View style={{marginHorizontal: 50,alignItems:'center'}}>
          <Text style={{fontSize:30, fontWeight:'bold',}}>Resume Match</Text>
          <Text>Let us match you to a platform at Citi!</Text>
          <Text>Just take a picture of your resume to learn more.</Text>
        </View>
  
        <Button
          icon={{
            name: 'image',
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
          onPress={this._pickImage}
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
