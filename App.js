/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';


export default class MyAboutUsApp extends Component<Props> {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.body}>
        <Text style={styles.sectionTitle}>About US</Text>
        <Text>
          The Electrode Native container is a native library similar to common third-party libraries that Android and 
          iOS developers are familiar with. The container is generated entirely by the Electrode Native platform and 
          packaged as an Android (AAR) library for Android and as a Framework for iOS.
        </Text>
    </View>
    )
  }
}



const styles = StyleSheet.create({

  body: {
    backgroundColor: "#ccddee",
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color:"#DDFFE3",
  }
});
