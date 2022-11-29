import React from 'react';
import { ScrollView, View, Image, Text, StyleSheet } from 'react-native';
import LifeStatus from '../../Components/Common/LifeStatus';

export default function StartPage() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: 'center' }}>
          <Image
            source={require('../../assets/icons/logo3.png')}
            style={styles.logo}
          />
          <LifeStatus />
          <Text style={styles.description}>
            Vamos transformar sua vida {'\n'} em jogo, buscando sempre {'\n'} o
            melhor nível.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'rgba(21,21,21,0.98)' },
  logo: { width: 300, height: 60, marginTop: 60, marginBottom: 20 },
  description: {
    color: '#f4f4f4',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 60,
  },
});
