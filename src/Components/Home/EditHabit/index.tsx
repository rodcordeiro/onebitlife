import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  View,
} from 'react-native';

interface IEditHabitProps extends TouchableOpacityProps {
  habit: string;
  frequency: string | number;
  habitArea: string;
  checkColor: string;
}

export default function EditHabit({
  checkColor,
  frequency,
  habit,
  habitArea,
  ...rest
}: IEditHabitProps) {
  function handleEdit() {
    console.log({ checkColor, frequency, habit, habitArea });
  }
  function handleCheck() {
    console.log('checked', habitArea);
  }
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      {...rest}
      style={styles.button}
      onPress={() => handleEdit()}>
      <View style={styles.habitText}>
        <Text style={styles.habitTitle}>{habit}</Text>
        <Text style={styles.habitFrequency}>{frequency}</Text>
      </View>
      <TouchableOpacity
        style={[styles.check, { borderColor: checkColor }]}
        onPress={() => handleCheck()}></TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#151515',
    borderRadius: 5,
    width: 320,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  habitTitle: {
    color: '#f4f4f4',
    fontWeight: 'bold',
  },
  habitText: {
    color: '#f4f4f4',
  },
  habitFrequency: {
    color: '#f4f4f4',
  },
  check: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 10,
  },
});
