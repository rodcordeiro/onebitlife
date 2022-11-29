import React from 'react';
import { View, StyleSheet } from 'react-native';
import Lottie from 'lottie-react-native';

export default function LifeStatus() {
  /**
   * Status:
   * 100- Máximo
   * 50- médio
   * 25- Baixo
   * 00- Curto(Acabou o game)
   * No robô, nós temos primeiro felicidade e depois a saúde. xx-xx
   */

  return (
    <View style={styles.container}>
      <Lottie
        source={require('../../../assets/education/education-100.json')}
        autoPlay
        loop
        style={styles.education}
      />
      <Lottie
        source={require('../../../assets/money/money-100.json')}
        autoPlay
        loop
        style={styles.money}
      />
      <Lottie
        source={require('../../../assets/robot/robot-100-100.json')}
        autoPlay
        loop
        style={styles.robot}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 300,
  },
  education: {
    width: 100,
    marginTop: 50,
    marginLeft: 5,
    position: 'absolute',
  },
  money: {
    width: 100,
    marginTop: 50,
    marginLeft: 95,
    position: 'absolute',
  },
  robot: {
    width: 190,
    marginTop: 30,
    marginLeft: 25,
  },
});
