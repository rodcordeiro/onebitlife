import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  Text,
} from 'react-native';

interface iButtonProps extends TouchableOpacityProps {
  buttonText: string;
  handlePress(): void;
  width?: number;
  height?: number;
}

export default function DefaultButton({
  buttonText,
  handlePress,
  width,
  height,
  ...rest
}: iButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={handlePress}
      style={[styles.button, { width: width, height: height }]}
      {...rest}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#f4f4f4',
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#f4f4f4',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
