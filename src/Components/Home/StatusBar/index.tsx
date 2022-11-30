import React from 'react';
import { ProgressBar } from 'react-native-paper';
import { View, Image, StyleSheet } from 'react-native';

interface IStatusBar {}
export default function StatusBar({}: IStatusBar) {
  return (
    <View style={styles.container}>
      <View style={styles.statusBarContainer}>
        <Image
          source={require('../../../assets/icons/educationIcon.png')}
          style={styles.icon}
        />
        <ProgressBar progress={0.25} color="#90b7f3" style={styles.progress} />
      </View>

      <View style={styles.statusBarContainer}>
        <Image
          source={require('../../../assets/icons/moneyIcon.png')}
          style={styles.icon}
        />
        <ProgressBar progress={0.75} color="#85bb65" style={styles.progress} />
      </View>
      <View style={styles.statusBarContainer}>
        <Image
          source={require('../../../assets/icons/bodyIcon.png')}
          style={styles.icon}
        />
        <ProgressBar progress={1} color="#ff0043" style={styles.progress} />
      </View>
      <View style={styles.statusBarContainer}>
        <Image
          source={require('../../../assets/icons/funIcon.png')}
          style={styles.icon}
        />
        <ProgressBar progress={1} color="#fe7f23" style={styles.progress} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#151515',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  statusBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  progress: {
    borderRadius: 10,
    width: 250,
    height: 8,
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 5,
  },
});
