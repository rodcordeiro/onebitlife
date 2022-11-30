import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { LifeStatus } from '../../Components/Common';
import { StatusBar, CreateHabit, EditHabit } from '../../Components/Home';

export default function HomePage() {
  const navigation = useNavigation();
  const [mindHabit, setMindHabit] = React.useState();
  const [moneyHabit, setMoneyHabit] = React.useState();
  const [bodyHabit, setBodyHabit] = React.useState();
  const [funHabit, setFunHabit] = React.useState();

  const handleNavExplanation = React.useCallback(() => {
    // @ts-ignore
    navigation.navigate('AppExplanationPage');
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.dailyCheck}>❤️ 20 dias - ✔️ 80 checks</Text>
          <LifeStatus />
          <StatusBar />

          {/* <CreateHabit habitArea="Mente" borderColor="#90b7f3" /> */}

          {mindHabit ? (
            <EditHabit
              habit="habito1"
              frequency={'diário'}
              habitArea="Mente"
              checkColor="#90b7f3"
            />
          ) : (
            <CreateHabit habitArea="Mente" borderColor="#90b7f3" />
          )}
          <Text
            style={styles.explanationText}
            onPress={() => handleNavExplanation()}>
            Ver explicação novamente
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(21,21,21,0.98)',
  },
  dailyCheck: {
    color: '#f4f4f4',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 60,
  },
  explanationText: {
    color: '#f4f4f4',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 15,
    paddingBottom: 25,
  },
});
