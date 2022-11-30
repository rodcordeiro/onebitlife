import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  Text,
} from 'react-native';

interface ICreateHabitProps extends TouchableOpacityProps {
  habitArea: string;
  borderColor: string;
}
export default function CreateHabit({
  habitArea,
  borderColor,
  ...rest
}: ICreateHabitProps) {
  function handleCreate() {
    console.log({
      habitArea,
      borderColor,
    });
  }
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      {...rest}
      style={[styles.button, { borderColor }]}
      onPress={() => handleCreate()}>
      <Text style={styles.habitTitle}>
        Adicionar meta {habitArea === 'Mente' ? 'da' : 'do'} {habitArea}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 315,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: 'white',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  habitTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
