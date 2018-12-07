import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
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

          <View style={styles.getStartedContainer}>

            <Text style={styles.header}>About Us</Text>


            <Text style={{marginBottom:20}}>
              Citi is a global bank with reach in more than 120 countries. However, Citi's interests stretch beyond just banking. There is a deep investment in technology between the security to keep everyone's finances safe to incubator programs to drive innovation. Within the analyst program, graduates and interns are given many opportunities such as rotating to new teams and participating in hackathons. Keep reading to learn more about some of the work our analysts have done. 
            </Text>

            <Text style={styles.header}>Our Engineers</Text>
            <Image
              source={
                __DEV__
                  ? require ('../assets/images/nick.jpg')
                  : require ('../assets/images/robot-prod.png')
              }
              style={{width:100, height:100, resizeMode:'contain',marginTop:10}}
            />
            <Text style={{fontSize:20, fontWeight:'bold'}}>Nick Bailey</Text>
            <Text>Nick graduated from Harvey Mudd College in 2017 with a joint degree in Computer Science and Mathematics. He spent his first rotation with the CitiSystems platform learning about container technologies including Docker and Kubernetes/Openshift, as well as automating the deployment and migration of container clusters. He is currently on his second rotation with the Hybrid Cloud CitiSecure team focusing on architecting highly available Next Generation Firewall technologies, automating VLan creation, and certifying user-ID based firewall rules for Amazon/Google cloud platforms.</Text>
            <Image
              source={
                __DEV__
                  ? require ('../assets/images/arianna.jpg')
                  : require ('../assets/images/robot-prod.png')
              }
              style={{width:100, height:100, resizeMode:'contain',marginTop:20}}
            />
            <Text style={{fontSize:20, fontWeight:'bold'}}>Arianna Mahan</Text>
            <Text>Arianna graduated from the University of Texas at Austin in 2018 with a degree in Computer Science. She is still on her first rotation with the CitiUser platform where she tests new technologies to certify them for everyone at Citi to use. This includes new desktops and laptops as well as software such as Microsoft Office and patches that roll out monthly.</Text>
          <Image
              source={
                __DEV__
                  ? require ('../assets/images/david.png')
                  : require ('../assets/images/robot-prod.png')
              }
              style={{width:100, height:100, resizeMode:'contain',marginTop:20}}
            />
            <Text style={{fontSize:20, fontWeight:'bold'}}>David Kim</Text>
            <Text style={{marginBottom:20}}>David Kim is an SMU, Class of 2017, graduate and a CATE 2017 full-time analyst who is completing his first rotation in the CitiDeveloper Platform. There, he has worked on expanding automation efforts for onboarding users into newer technologies such as Artifactory and Cloudbees Jenkins, which have both replaced applications that are more than 10 years old.  These two applications are critical components of Citi's containerization strategy as two major portions of the CI/CD pipeline. For David’s second year in the program he will soon rotate to the CitiData platform where he will be aligned to the database automation team. This will allow him to contribute to innovations with NoSQL database technologies like MongoDB.</Text>
          
            <Text style={styles.header}>Our Culture</Text>
            
            <Text>Citi has a culture of constant learning. Whether an intern or seasoned professional, everyone is encouraged to grow and shape their career. Analysts are given training and experience leading. They work in an open seating environment that drives collaboration. Managers and mentors are excited to answer any and all questions, creating long-lasting relationships. Activities such as training in New York and hackathons are more than just fun, allowing deep bonds to form between the analysts.</Text>
          <Image
              source={
                __DEV__
                  ? require ('../assets/images/hive.jpg')
                  : require ('../assets/images/robot-prod.png')
              }
              style={{width:300, height:250, resizeMode:'contain'}}
            />
            <Image
              source={
                __DEV__
                  ? require ('../assets/images/hackathon.jpg')
                  : require ('../assets/images/robot-prod.png')
              }
              style={{width:300, height:250, resizeMode:'contain',marginBottom:20}}
            />
          </View>

          
        </ScrollView>

        
      </View>
    );
  }

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 0,
  },
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
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  header: {
    fontSize:30,
    fontWeight:'bold',
  },
});
