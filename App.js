import React, {Fragment} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <Fragment>
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Hello World</Text>
          <Text style={styles.sectionTitle}>Hello World</Text>
        </View>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    textAlign: 'center',
    backgroundColor: '#F5FCFF',
    // fontWeight: '600',
    //  color: Colors.black,
  },
});

export default App;
