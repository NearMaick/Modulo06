import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
  },
  sectionTitle: {
    fontSize: 24,
    textAlign: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const App = () => {
  return (
    <>
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Hello World</Text>
          <Text style={styles.sectionTitle}>Hello World</Text>
          <Text style={styles.sectionTitle}>Hello World</Text>
        </View>
      </View>
    </>
  );
};

export default App;
