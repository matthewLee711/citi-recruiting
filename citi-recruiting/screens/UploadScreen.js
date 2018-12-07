import React from 'react';
import { Image, ScrollView, StyleSheet, View, Text } from 'react-native';
import { ExpoConfigView } from '@expo/samples';
    title: 'Digital Line',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#4169E1',
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:20}}>
          Come chat with us at the Citi booth! 
        </Text>

        <Button
          icon={{
            name: 'person-add',
            size: 15,
            color: '#EF1C24'
          }}
          title='Reserve Next Available Spot'
          buttonStyle={{
            backgroundColor: "#1B2351",
            width: 270,
            height: 75,
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5,
            marginTop: 50
          }}
        />

       

      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
=======
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
>>>>>>> fc8281f9da8578af6ea968579e23c55fd7073abb
    backgroundColor: '#DCDCDC',
  },
});
