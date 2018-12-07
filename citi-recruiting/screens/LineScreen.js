import React from 'react';
import { Image, ScrollView, StyleSheet, View, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Button } from 'react-native-elements';
import axios from 'axios';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null,
    // title: 'Digital Line',
    // headerTintColor: '#ffffff',
    // headerStyle: {
    //   backgroundColor: '#4169E1',
    // }
  };

  constructor(props) {
    super(props);
    this.addUserInLine = this.addUserInLine.bind(this);
    this.state = { message: '' };
  }


  addUserInLine() {
    axios.post(`http://172.20.10.4:3001/adduser`, {
     userid: 'John1'
    })
   .then(res => {
     console.log(res);
     this.setState({ message: 'Successfully added to line!' });
   })
   .catch(res => {
     this.setState({ message: 'Error adding you to line, that sucks!' });
     });
  }


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
      <Text style={{fontSize:30, fontWeight:'bold', marginBottom:20}}>Digital Line</Text>
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
          onPress={this.addUserInLine}
        />

        {
          this.state.message ? 
            <Text>{this.state.message}</Text>
            : <Text></Text> 
          }

       

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
