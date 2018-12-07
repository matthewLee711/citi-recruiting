import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Button } from 'react-native-elements';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
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
    backgroundColor: '#DCDCDC',
  },
});
